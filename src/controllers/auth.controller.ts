import { APIGatewayProxyEvent } from "aws-lambda";
import { IControllerResponse } from "../typings";
import { AuthFacade } from "../facade/auth.facade";
import { ClientError } from "../errors/client-error";

export async function login(event: APIGatewayProxyEvent): Promise<IControllerResponse> {
    try {
        if (event.body == null) return { statusCode: 400, body: "Please provide a body" };

        const body: { username: string; password: string } = JSON.parse(event.body);
        const facade = new AuthFacade();

        const response = await facade.login(body);
        return { statusCode: 200, body: response };
    } catch (error) {
        if (error instanceof ClientError) {
            return { statusCode: 400, body: error.message };
        } else if (error instanceof Error) {
            return { statusCode: 500, body: error.message };
        } else {
            return { statusCode: 500, body: "Unexpected error" };
        }
    }

}
