import MySqlUserAccesor from "../../../sql/infrastructure/database/userSql/MySqlUserAccesor"
import UserRouterExpressInterface from "../../domain/interfaces/UserRouterExpressInterface"
import AuthControllerExpress from "../express/controller/AuthControllerExpress"
import UserControllerExpress from "../express/controller/UserControllerExpress"
import UserRouterExpress from "../express/router/UserRouterExpress"
import UserUseCaseFactory from "./UserUseCaseFactory"

export default class UserRouterFactory {
  public static create(): UserRouterExpressInterface {
    const sqlUserAccesor = new MySqlUserAccesor()
    
    const authUseCase = UserUseCaseFactory.createAuthUseCase(sqlUserAccesor)
    const userUseCase = UserUseCaseFactory.createUserUseCase(sqlUserAccesor)
    
    const userController = new UserControllerExpress(userUseCase)
    const authController = new AuthControllerExpress(authUseCase)
    
    return new UserRouterExpress(userController,authController)
  }
}
