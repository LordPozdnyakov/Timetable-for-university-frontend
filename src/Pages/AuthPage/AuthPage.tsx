import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { LoginFormContainerComponent, RecoveryFormContainerComponent } from '../../Modules';

const AuthPage = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginFormContainerComponent}/>
            <Route exact path="/recovery" component={RecoveryFormContainerComponent}/>
        </Switch>
    );
};

export default AuthPage;