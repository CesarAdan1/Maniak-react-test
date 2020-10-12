import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Blog, Home, Partners, Solutions, Stories } from './components/Views';
import { Header } from './components/common';

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/solutions" component={Solutions}/>
            <Route exact path="/partners" component={Partners}/>
            <Route exact path="/stories" component={Stories}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/blog" component={Blog}/>
        </Switch>
        </>
    )
}

export default Routes;
