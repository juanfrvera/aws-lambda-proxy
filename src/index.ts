import { APIGatewayProxyEvent } from "aws-lambda";
import { router } from "./utils/router";
import { routes } from "./routes";
import { IHttpResponse } from "./typings";
import { executeMiddlewares } from "./utils/middlewares";

export const handler = async (event: APIGatewayProxyEvent): Promise<IHttpResponse> => {
    try {
        console.log(event);
        const { action, middlewares } = router(event, routes);
        await executeMiddlewares(event, middlewares);

        const res = await action(event);

        return {
            statusCode: res.statusCode,
            body: JSON.stringify(res.body)
        };
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "route_not_found") {
                return { statusCode: 404, body: "route not found" };
            } else if (error.message === "unauthenticated") {
                return { statusCode: 401, body: "User Unauthenticated" };
            }
        }
        console.error(error);
        return { statusCode: 500, body: "unexpected error" };
    }
};