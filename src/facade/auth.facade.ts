import { ClientError } from "../errors/client-error";

export class AuthFacade {
    public login(data: { username: string; password: string; }) {
        if (data.username === "test" && data.password === "test") {
            const token = "random-token";

            return token;
        } else {
            throw new ClientError("invalid username or password");
        }
    }
}