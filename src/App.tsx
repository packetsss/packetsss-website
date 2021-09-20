import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const user = true;
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/posts">
                    <Home />
                </Route>
                <Route exact path="/register">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route exact path="/login">{user ? <Home /> : <Login />}</Route>
                <Route exact path="/post/:id">
                    <Single />
                </Route>
                <Route exact path="/write">{user ? <Write /> : <Login />}</Route>
                <Route exact path="/settings">
                    {user ? <Setting /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
