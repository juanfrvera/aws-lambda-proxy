import { APIGatewayProxyEvent } from 'aws-lambda';

export const executeMiddlewares = async (event: APIGatewayProxyEvent, middlewares: any[] | undefined) => {
    if (middlewares) {
        for (const middleware of middlewares) {
            await middleware(event);
        }
    }
}