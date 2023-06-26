import { ClientError } from "../errors/client-error";
import * as jose from 'jose';
export class AuthFacade {
    public login(data: { username: string; password: string; }) {
        if (data.username === "test" && data.password === "test") {
            return this.generateToken();
        } else {
            throw new ClientError("invalid username or password");
        }
    }

    public async verifyToken(jwt: string) {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        return jose.jwtVerify(jwt, secret, {});
    }

    private generateToken() {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const expirationTime = process.env.JWT_EXPIRATION_TIME ?? '2h';

        const payload = { sub: "1234567890", name: "John Doe", admin: true };

        return new jose.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime(expirationTime)
            .sign(secret);
    }
}