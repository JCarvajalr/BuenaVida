import PasswordSecurityInterface from "../../../bycript/domain/PasswordSecurityInterface";
import AuthRepositoryPort from "../../domain/port/driven/AuthRepositoryPort"
import User from "../../domain/User";

export default class AuthRepository implements AuthRepositoryPort {
    constructor(private readonly passwordSecurity: PasswordSecurityInterface) {}

    public async hashPassword(password: string): Promise<string> {
        return this.passwordSecurity.hashPassword(password)
    }
    public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await this.passwordSecurity.comparePasswords(password, hashedPassword)
    }
    
    logout(user: User): Promise<void> {
        return Promise.resolve()
    }
}