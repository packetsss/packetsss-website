import axios from "axios";
import { baseURL, getAuth } from "../components/utils/Utils";

const axiosAccess = axios.create({
    baseURL: baseURL,
    timeout: 8000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

function saveToken(
    access_token: string,
    refresh_token: string,
    expires_in: any
) {
    window.localStorage.setItem("access_token", access_token);
    window.localStorage.setItem("refresh_token", refresh_token);
    window.localStorage.setItem(
        "expires_in",
        Math.ceil(Date.now() / 1000) + expires_in
    );
}

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom: any) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axiosAccess.interceptors.response.use(
    (response) => {
        return response;
    },

    async function (error) {
        const originalRequest = error.config;

        if (typeof error.response === "undefined") {
            let alerted = localStorage.getItem("alerted");
            if (alerted !== "true") {
                alert(
                    error +
                        "\nBackend server is probably unavailable right now.\n\nPlease contact Packetsss for further assistance:\nhttps://github.com/packetsss"
                );
                localStorage.setItem("alerted", "true");
                setTimeout(() => {
                    localStorage.removeItem("alerted");
                }, 20000);
            }
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] =
                            "Bearer " + token;
                        return axios(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            // renewing access token
            return new Promise(function (resolve, reject) {
                delete axiosAccess.defaults.headers?.Authorization;
                axiosAccess
                    .post(
                        "/auth/token/",
                        getAuth(
                            {
                                refresh_token:
                                    localStorage.getItem("refresh_token"),
                            },
                            "refresh_token"
                        )
                    )
                    .then((resp) => {
                        saveToken(
                            resp.data.access_token,
                            resp.data.refresh_token,
                            resp.data.expires_in
                        );
                        // update default header
                        axiosAccess.defaults.headers ? (
                            (axiosAccess.defaults.headers.Authorization =
                                "Bearer " +
                                localStorage.getItem("access_token"))
                        ) : (
                            <div></div>
                        );

                        // update original request headers
                        originalRequest.headers[
                            "Authorization"
                        ] = `Bearer ${localStorage.getItem("access_token")}`;
                        processQueue(
                            null,
                            localStorage.getItem("access_token")
                        );
                        resolve(axios(originalRequest));
                    })
                    .catch((err) => {
                        processQueue(err, null);
                        reject(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);

export default axiosAccess;
