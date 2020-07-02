import React from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import { Button } from '../components/common';

enum userRoles {
     superAdmin = 'superAdmin',
     admin = 'admin',
     nonAdmin = 'nonAdmin'
}

export const UserRoles = {
     admins: [String(userRoles.superAdmin), String(userRoles.admin)],
     users: [String(userRoles.nonAdmin)],
     all: Object.values(userRoles)
};

interface Props {
     component: React.FC<RouteComponentProps>;
     path: string;
     exact?: boolean;
     roles: string[];
}

interface IUser {
     permissions: string[];
     roles: string[];
}

const hasRole = (user: IUser, roles: string[]) =>
     roles.some((role) => user.roles.includes(role));

export const hasPermission = (user: IUser, permissions: string | string[]) =>
     user.permissions.some((permission) =>
          typeof permissions === 'string'
               ? permission === permissions
               : permissions.includes(permission)
     );

const AuthRoute = ({ component, ...rest }: Props) => {
     const Component = component;
     const isAuth = !!localStorage.getItem('ACCESS_TOKEN');
     const currentUser = JSON.parse(
          localStorage.getItem('CURRENT_USER') || '{}'
     );
     const message = 'Please login to this page';

     // check if route is restricted by role
     const isHasRole = hasRole(currentUser, rest.roles);
     //  const canDelete = hasPermission(currentUser, 'canDelete');
     //  console.log({ canDelete });

     return (
          <Route
               {...rest}
               render={(props: RouteComponentProps) =>
                    isAuth && isHasRole ? (
                         <Component {...props} />
                    ) : (
                         <Redirect
                              to={{
                                   pathname: '/login',
                                   state: {
                                        message,
                                        requestedPath: rest.path
                                   }
                              }}
                         />
                    )
               }
          />
     );
};

export default AuthRoute;
