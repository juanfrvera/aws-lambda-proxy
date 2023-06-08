import { APIGatewayProxyEvent } from "aws-lambda";
import { IControllerResponse } from "../typings";
import { handleException } from "../utils/controllers";
import { ItemFacade } from "../facade/item.facade";

export async function getItems(event: APIGatewayProxyEvent): Promise<IControllerResponse> {
    try {
        const itemFacade = new ItemFacade();
        const response = await itemFacade.getItems();
        return { statusCode: 200, body: response };
    } catch (ex) {
        return handleException(ex);
    }
}