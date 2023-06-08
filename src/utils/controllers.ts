import { ClientError } from "../errors/client-error";
import { IControllerResponse } from "../typings";

export function handleException(ex): IControllerResponse {
    if (ex instanceof ClientError) {
        return { statusCode: 400, body: ex.message };
    } else if (ex instanceof Error) {
        return { statusCode: 500, body: ex.message };
    } else {
        return { statusCode: 500, body: "Unexpected error" };
    }
}