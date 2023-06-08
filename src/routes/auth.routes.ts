import { login } from '../controllers/auth.controller';
import { IRoute, HttpMethods } from '../typings';

export const basePath = '/auth';

export const authRoutes: IRoute[] = [
    {
        httpMethod: HttpMethods.POST,
        path: `${basePath}/login`,
        action: login,
    },
];