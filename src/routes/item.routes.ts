import { getItems } from '../controllers/item.controller';
import { IRoute, HttpMethods } from '../typings';

export const basePath = '/items';

export const itemRoutes: IRoute[] = [
    {
        httpMethod: HttpMethods.GET,
        path: `${basePath}`,
        action: getItems,
    },
];