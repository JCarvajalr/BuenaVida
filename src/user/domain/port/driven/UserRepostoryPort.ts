import RepositoryInterface from "../../../../repository/RepositoryInterface"
import { UserInterface } from "../../AbstractUser"
import { RegisterUserInterface } from "../../auth/AbstractRegisterUser"

export default interface UserRepositoryPort extends RepositoryInterface<string, UserInterface> {
    findByEmail(email: string): Promise<UserInterface>
    create(user: RegisterUserInterface): Promise<UserInterface | null>
}