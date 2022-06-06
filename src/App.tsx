import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Page1} from "./pages/Page1";
import {Page2} from "./pages/Page2";

function App() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>

            <Route exact path={'/pages/1/:any?'} component={Page1}/>

            <Route strict path={'/pages/2/:any(test1|test2)'}>
                <Page2/>
            </Route>

            <Route path={'/pages/3'} render={(props) => (
                <>
                    <h2>Page 3</h2>
                    <p>path = {props.location.pathname}</p>
                </>
            )}/>

            <Route exact path={['/pages/4', '/pages/main']} render={(props) => (
                <>
                    <h2>Page 4</h2>
                    <p>path = {props.location.pathname}</p>
                </>
            )}/>

            <Route path={'/404'} render={(props) => (
                <>
                    <h2>404. Page Not Found</h2>
                    <p>path = {props.location.pathname}</p>
                </>
            )}/>

            <Redirect to={"/404"}/>
        </Switch>
    );
}

export default App;
