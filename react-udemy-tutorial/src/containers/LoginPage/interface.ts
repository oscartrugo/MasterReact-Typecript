import { RouteComponentProps } from "react-router";

export interface LoginPageProps extends RouteComponentProps {
    onLoginSuccess():void;
}

export interface LoginPageState {
    inputUsername: string;
    inputPassword: string;
    errorMessage: string;
}