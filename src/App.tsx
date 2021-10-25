import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { HomePage } from './Pages';
import { LoginFormContainerComponent, RecoveryFormContainerComponent } from './Modules';


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
