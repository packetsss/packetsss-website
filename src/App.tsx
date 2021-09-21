import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/setting/Setting";
import Login from "./components/pages/login/Login";
import About from "./components/pages/about/About";
import Register from "./components/pages/register/Register";
import BottomBar from "./components/bottombar/BottomBar";

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
                <Route exact path="/about">
                    <About />
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
            <BottomBar />
        </Router>
    );
}

export default App;
