import { APIGatewayProxyEvent } from 'aws-lambda';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
    console.log('authentication');
    console.log(event.headers);
}