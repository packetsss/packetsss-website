import ReactNotification from "react-notifications-component";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import TopBar from "./components/navbar/NavBar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Projects from "./components/pages/projects/Projects";
import Posts from "./components/pages/posts/Posts";
import Setting from "./components/pages/setting/Setting";
import Login from "./components/pages/login/Login";
import About from "./components/pages/about/About";
import Register from "./components/pages/register/Register";
import Footer from "./components/footer/Footer";
import { Chat } from "./components/pages/chat/Chat";
import { ScrollToTop } from "./Utils";

function App() {
    // modify animation time to 0.5s instead of 1s
    document.documentElement.style.setProperty("--animate-duration", ".5s");

    return (
        // github page only supports hashRouter not browserRouter
        <HashRouter basename={"/"}>
            <div className="mainDiv">
                <ReactNotification />
                <ScrollToTop />
                <TopBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/register">
                        {<Register />}
                    </Route>
                    <Route exact path="/login">
                        {<Login />}
                    </Route>
                    <Route
                        exact
                        path="/post/:id"
                        render={(props) => <Single {...props} />}
                    />

                    <Route exact path="/posts">
                        {<Posts />}
                    </Route>
                    <Route exact path="/write">
                        {<Write />}
                    </Route>
                    <Route exact path="/settings">
                        {<Setting />}
                    </Route>
                    <Route exact path="/chat">
                        {<Chat />}
                    </Route>
                </Switch>
            </div>
            <Footer />
        </HashRouter>
    );
}

export default App;
