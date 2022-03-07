import { RouteComponentProps } from "react-router-dom";

interface AboutPageRouteParams {
    username: string;
}

export type AboutPageProps = RouteComponentProps<AboutPageRouteParams>;