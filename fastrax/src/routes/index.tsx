import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutRoute from './about';
import DashboardRoute from './dashboard';

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
     return (
          <Router>
               <Switch>
                    <Route exact path="/" component={DashboardRoute} />
                    <Route path="/about" component={AboutRoute} />
               </Switch>
          </Router>
     );
};

export default Routes;
