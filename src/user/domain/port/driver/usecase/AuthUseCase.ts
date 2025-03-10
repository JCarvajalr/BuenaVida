import { RegisterUserInterface } from "../../../auth/AbstractRegisterUser";
import User from "../../../User";

export default interface AuthUseCasePort {
    login(email: string, password: string): Promise<{ user: User, token: string }>;
    logout(user: User): Promise<void>;
    register(user: RegisterUserInterface): Promise<User>;
}
