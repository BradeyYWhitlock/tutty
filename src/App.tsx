import React, { Fragment } from 'react';
import { Component, ReactNode } from 'react';
import { RouteComponentProps, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Routes, { AppRoute } from './routes/Routes';

import Header from './components/header/Header'

import './common/styles/main.scss'


class App extends Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
    }

    public render(): ReactNode {
        return (
            <Fragment>
                {/* <Header /> */}
                <div className="appContentContainer">
                    <Switch>
                        {Routes.map(
                            (routeObj: AppRoute): ReactNode => {
                                return (
                                    <Route
                                        component={routeObj.component}
                                        {...routeObj}
                                        key={routeObj.path}
                                    />
                                );
                            }
                        )}
                        <Redirect from={'*'} to={'/home'} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(App)