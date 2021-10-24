import React from 'react';

import {Route, Switch} from 'react-router-dom';

import LoginFormContainerComponent from './Modules/LoginForm/LoginFormContainerComponent';
import RecoveryFormContainerComponent from './Modules/RecoveryForm/RecoveryFormContainerComponent';
import HomePage from './Pages/HomePage/HomePage';




const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/login" component={LoginFormContainerComponent} />
                <Route exact path="/recovery" component={RecoveryFormContainerComponent} />
                <Route  path="/" component={HomePage} />
            </Switch>

        </>
    );
}

export default App;
