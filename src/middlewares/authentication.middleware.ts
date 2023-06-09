import { APIGatewayProxyEvent } from 'aws-lambda';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
    if (!event.headers.token || event.headers.token !== 'random-token') {
        throw new Error("unauthenticated");
    }
}