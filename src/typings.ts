export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface IRoute {
    httpMethod: HttpMethods;
    path: string;
    middlewares?: any[];
    action: (...args: any[]) => Promise<IControllerResponse>;
};

export interface IControllerResponse {
    statusCode: number;
    body: any;
}

export interface IHttpResponse {
    statusCode: number;
    body: string;
}

export interface IUser {
    username: string;
    password: string;
}