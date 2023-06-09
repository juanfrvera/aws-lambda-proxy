import { getItems } from '../controllers/item.controller';
import { authenticationMiddleware } from '../middlewares/authentication.middleware';
import { IRoute, HttpMethods } from '../typings';

export const basePath = '/items';

export const itemRoutes: IRoute[] = [
    {
        httpMethod: HttpMethods.GET,
        path: `${basePath}`,
        middlewares: [authenticationMiddleware],
        action: getItems,
    },
];