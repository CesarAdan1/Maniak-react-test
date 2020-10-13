import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Partners, Solutions, Stories } from './components/Views';
import { Header } from './components/common';

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/page-1" component={Solutions}/>
            <Route exact path="/page-2" component={Partners}/>
            <Route exact path="/notfound" component={Stories}/>
        </Switch>
        </>
    )
}

export default Routes;
