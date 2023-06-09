import { APIGatewayProxyEvent } from "aws-lambda";
import { router } from "./utils/router";
import { routes } from "./routes";
import { IHttpResponse } from "./typings";
import { executeMiddlewares } from "./utils/middlewares";

export const handler = async (event: APIGatewayProxyEvent): Promise<IHttpResponse> => {
    try {
        const { action, middlewares } = router(event, routes);
        await executeMiddlewares(event, middlewares);

        const controllerResponse = await action(event);

        return {
            statusCode: controllerResponse.statusCode,
            body: JSON.stringify(controllerResponse.body)
        };
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "route_not_found") {
                return { statusCode: 404, body: "route not found" };
            } else if (error.message === "unauthenticated") {
                return { statusCode: 401, body: "User Unauthenticated" };
            }
        }
        return { statusCode: 500, body: "unexpected error" };
    }
};