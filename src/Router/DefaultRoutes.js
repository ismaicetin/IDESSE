import { Route, Switch } from "react-router-dom"; 
import React from "react";
import HomePage from "../views/Default/HomePage";
import Kartlar from "../views/Default/Kartlar";
import Uniteler from "../views/Default/Uniteler";
import ErrorPage from "../views/Default/ErrorPage";
function Routes() { 
    return (  
        <Switch > 
            <Route exact path="/" component={HomePage} />   
            <Route exact path="/kartlar" component={Kartlar} />   
            <Route exact path="/uniteler" component={Uniteler} /> 
            <Route path="*"  component={ErrorPage} />  
        </Switch> 
    ) 
}

// kartlar
// uniteler

export default Routes;


// Id
// Code                 
// Description
// Status