import PasswordSecurity from "../../../bycript/infrastructure/security/PasswordSecurity";
import JWTService from "../../../jwt/application/service/JWTService";
import MySqlUserAccesor from "../../../sql/infrastructure/database/userSql/MySqlUserAccesor";
import AuthService from "../../application/service/AuthService";
import UserService from "../../application/service/UserService";
import AuthUseCase from "../../application/usecase/AuthUseCase";
import UserUseCase from "../../application/usecase/UserUseCase";
import AuthUseCasePort from "../../domain/port/driver/usecase/AuthUseCase";
import UserPort from "../../domain/port/driver/usecase/UserUseCasePort";
import AuthRepository from "../repository/AuthRepository";
import UserRepository from "../repository/UserRepository";

export default class UserUseCaseFactory {
    public static createAuthUseCase(sqlUser: MySqlUserAccesor): AuthUseCasePort {
        const passwordSecurity = new PasswordSecurity()

        const authRepository = new AuthRepository(passwordSecurity);
        const userRepository = new UserRepository(sqlUser);
        const authService = new AuthService(authRepository, userRepository);
        const jwtService = new JWTService()

        return new AuthUseCase(authService, jwtService);
    }
    public static createUserUseCase(sqlUser: MySqlUserAccesor): UserPort {
        const userRepository = new UserRepository(sqlUser)
        const userService = new UserService(userRepository)
        
        return new UserUseCase(userService)
    }
}