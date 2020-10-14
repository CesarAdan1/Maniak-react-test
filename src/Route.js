import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Partners, Solutions, Stories } from './components/Views';
import { Header } from './components/common';

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/page-1" component={Home}/>
            <Route exact path="/page-2" component={Solutions}/>
            <Route exact path="/#" component={Partners}/>
            <Route exact path="/#" component={Stories}/>
        </Switch>
        </>
    )
}

export default Routes;
