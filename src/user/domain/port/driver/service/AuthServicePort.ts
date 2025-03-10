import { RegisterUserInterface } from "../../../auth/AbstractRegisterUser"
import User from "../../../User"

export default interface AuthServicePort {
    login(email: string, password: string): Promise<User>
    logout(user: User): Promise<void>
    register(user: RegisterUserInterface): Promise<User>
}