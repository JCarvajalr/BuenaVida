import { RegisterUserInterface } from "../../domain/auth/AbstractRegisterUser";
import JWTInterface from "../../../jwt/domain/JWTInterface";
import NullUser from "../../domain/NullUser";
import AuthServicePort from "../../domain/port/driver/service/AuthServicePort";
import AuthUseCasePort from "../../domain/port/driver/usecase/AuthUseCase";
import User from "../../domain/User";

export default class AuthUseCase implements AuthUseCasePort {
    constructor(private readonly authService: AuthServicePort,
        private readonly jwtService: JWTInterface) {}
    async login(email: string, password: string): Promise<{ user: User; token: string }> {

        if ((email === undefined || email === null) || (password === undefined || password === null)) {
            return { user: new NullUser(), token: "" };
        }

        const user: User = await this.authService.login(email, password);

        if (user.isNull()) {
            return { user: new NullUser(), token: "" };
        }

        const token = this.jwtService.generateToken({ id: user.getId() });

        return { user, token };
    }
    async register(user: RegisterUserInterface): Promise<User> {
        if ((user === undefined || user === null)) return new NullUser();
        return await this.authService.register(user)
    }
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.")
    }
}