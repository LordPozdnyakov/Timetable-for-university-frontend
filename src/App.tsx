import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {AuthPage, HomePage } from './Pages';
import { LoginFormContainerComponent, RecoveryFormContainerComponent } from './Modules';


const App = (props:any) => {
    return (
        <>
            <Switch>
                <Route  exact path={['/login',"/recovery"]} component={AuthPage}/>
                <Route  path="/" render={() => (props.isAuth ? <HomePage /> : <Redirect to="/login" /> )} />
            </Switch>

        </>
    );
}

export default App;
