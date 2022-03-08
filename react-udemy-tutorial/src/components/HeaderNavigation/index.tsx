import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import { RouteLink } from '../RouteLink';
import './style.css';

const HeaderNavigation: React.FC = () => {
    return (
        <div className="header-navigation">
            <Link component={RouteLink} to={ROUTE.HOME}>Home</Link>
            <Link component={RouteLink} to={ROUTE.ABOUT}>About</Link>
        </div>
    )
}

export default HeaderNavigation;