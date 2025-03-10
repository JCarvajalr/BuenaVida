import jwt from "jsonwebtoken"
import JWTInterface from "../../domain/JWTInterface"
import JWTProvider from "../../insfrastructure/provider/JWTProvidet"

export default class JWTService implements JWTInterface {

    private secret: string = JWTProvider.getInstance().getTokenSecret() || '';
    generateToken(payload: object): string {
        return jwt.sign(payload, this.secret, { expiresIn: "3h" });
    }

    verifyToken(token: string): object | null {
        try {
            return jwt.verify(token, this.secret) as object;
        } catch (error) {
            return null;
        }
    }
}
