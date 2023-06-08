import { APIGatewayProxyEvent } from "aws-lambda";
import { IControllerResponse } from "../typings";
import { AuthFacade } from "../facade/auth.facade";
import { handleException } from "../utils/controllers";

export async function login(event: APIGatewayProxyEvent): Promise<IControllerResponse> {
    try {
        if (event.body == null) return { statusCode: 400, body: "Please provide a body" };

        const body: { username: string; password: string } = JSON.parse(event.body);
        const facade = new AuthFacade();

        const response = await facade.login(body);
        return { statusCode: 200, body: response };
    } catch (ex) {
        return handleException(ex);
    }
}
