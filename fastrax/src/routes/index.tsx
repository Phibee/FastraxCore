import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthRoute, { UserRoles } from '../auth';

import AboutRoute from './about';
import DashboardRoute from './dashboard';
import LoginRoute from './login';

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
     const user = {
          roles: ['superAdmin'],
          permissions: ['canDelete']
     };
     localStorage.setItem('ACCESS_TOKEN', 'wew');
     localStorage.setItem('CURRENT_USER', JSON.stringify(user));

     // localStorage.removeItem('ACCESS_TOKEN');
     return (
          <Router>
               <Switch>
                    {/* <AuthRoute
                         exact
                         path="/"
                         component={DashboardRoute}
                         roles={UserRoles.all}
                    /> */}
                    <Route path="/" component={DashboardRoute} />
                    <Route path="/about" component={AboutRoute} />
                    <Route path="/login" component={LoginRoute} />
               </Switch>
          </Router>
     );
};

export default Routes;
