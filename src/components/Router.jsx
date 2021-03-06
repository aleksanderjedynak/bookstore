import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import AdminPanel from "./adminPanel";
import PageNotFound from "./pageNotFound";

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/admin" component={AdminPanel}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        );
    };

}

export default Router;