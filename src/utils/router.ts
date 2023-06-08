import { APIGatewayProxyEvent } from 'aws-lambda';
import { IRoute } from '../typings';

export const router = (event: APIGatewayProxyEvent, routes: IRoute[]) => {

    const route = routes.find((route) => {
        return event.httpMethod === route.httpMethod && route.path === event.path;
    });

    if (!route) {
        console.error("route not found", event.httpMethod, event.path);
        throw new Error('route_not_found');
    }

    return route;
}