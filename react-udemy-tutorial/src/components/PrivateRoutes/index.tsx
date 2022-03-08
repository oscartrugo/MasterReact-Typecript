import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import { AboutPage } from '../../containers/AboutPage';
import { HomePage } from '../../containers/HomePage';
import HeaderNavigation from '../HeaderNavigation';
import { PrivateRoutesProps } from './interface';

export const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isLogin }) => {
    return isLogin ? (
        <>
            <HeaderNavigation />
            <Switch>
                <Route component={AboutPage} path={ROUTE.ABOUT} />
                <Route component={HomePage} path={ROUTE.HOME} />
            </Switch>
        </>
    ) : <Redirect to={ROUTE.LOGIN} />
}