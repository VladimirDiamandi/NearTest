import RegistrationEmailPage from 'pages/RegistrationPages/RegistrationEmailPage';
import { PathRouteProps } from 'react-router-dom';

export interface IRoute {
  path: string;
  element: React.ReactNode;
  key?: string;
}

export enum RouteNames {
  HOME = "/",
  REGISTRATION=  "/registration",
  REGISTRATION_VERIFY=  "/registration/verify",
  REGISTRATION_CREATE=  "/registration/create",
  REGISTRATION_SECURE=  "/registration/secure",
}
export const PrivateRoutes: PathRouteProps[] = [];

export const PublicRoutes: IRoute[] = [
  { path: RouteNames.REGISTRATION, element: <RegistrationEmailPage/> },
];