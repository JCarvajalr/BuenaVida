import { UserInterface } from "../../../AbstractUser";
import { RegisterUserInterface } from "../../../auth/AbstractRegisterUser";
import User from "../../../User";

export default interface UserServicePort {
    createUser(item: RegisterUserInterface): Promise<User | null>
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>
    updateUser(id: string, item: Partial<UserInterface>): Promise<User | boolean>
    deleteUser(id: string): Promise<boolean>
}