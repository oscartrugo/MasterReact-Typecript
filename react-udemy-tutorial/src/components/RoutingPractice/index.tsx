import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import { LoginPage } from '../../containers/LoginPage';
import { IS_LOGIN_SESSION_KEY } from '../../containers/LoginPage/constant';
import { Button } from '../Button';
import { PrivateRoutes } from '../PrivateRoutes';
import { RoutingPracticeProps, RoutingPracticeState } from './interface';
import './style.css';

class RoutingPractice extends React.Component<RoutingPracticeProps, RoutingPracticeState> {
    constructor(props: RoutingPracticeProps) {
        super(props);

        const isLoginFromSession = sessionStorage.getItem(IS_LOGIN_SESSION_KEY) === 'true';

        this.state = {
            isLogin: isLoginFromSession,
        }
    }

    handleLoginSuccess = () => {
        this.setState({
            isLogin: true
        })
    }

    handleLogout = () => {
        this.setState({
            isLogin: false,
        });

        sessionStorage.setItem(IS_LOGIN_SESSION_KEY, 'false');
    }

    render() {
        const { isLogin } = this.state;

        return (
            <div className="routing-practice">
                <BrowserRouter>
                    <Route
                        render={(routeProps) => {
                            return isLogin ? <Redirect to={ROUTE.HOME} /> : <LoginPage onLoginSuccess={this.handleLoginSuccess} {...routeProps} />
                        }}
                        path={ROUTE.LOGIN} 
                    />
                    <PrivateRoutes isLogin={isLogin} />
                </BrowserRouter>
                {isLogin && <Button onClick={this.handleLogout}>Log Out</Button>}
            </div>
        )
    }
}

export default RoutingPractice;