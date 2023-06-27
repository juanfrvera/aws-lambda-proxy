import { APIGatewayProxyEvent } from 'aws-lambda';
import { AuthFacade } from '../facade/auth.facade';
import * as jose from 'jose';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
    try {
        if (event.headers.token) {
            const authFacade = new AuthFacade();
            const data = await authFacade.verifyToken(event.headers.token);
            console.log(data);
            return true;
        }
        throw new Error("unauthenticated");
    } catch (error) {
        if (error instanceof jose.errors.JWSInvalid || error instanceof jose.errors.JWTExpired) {
            throw new Error("unauthenticated");
        }
        throw error;
    }

}