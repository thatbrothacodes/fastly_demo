import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContactView } from '../../contacts/components';
import InvalidPage from '../../404';
import Home from '../../Home';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contacts/:id' component={ContactView}/>
            <Route component={InvalidPage}/>
        </Switch>
    );
}
