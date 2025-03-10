import UserUseCasePort from "../../domain/port/driver/usecase/UserUseCasePort"
import { UserInterface } from "../../domain/AbstractUser"
import { RegisterUserInterface } from "../../domain/auth/AbstractRegisterUser"
import UserServicePort from "../../domain/port/driver/service/UserServicePort"
import User from "../../domain/User"

export default class UserUseCase implements UserUseCasePort {
    constructor(private readonly userService: UserServicePort) { }
    async createUser(user: RegisterUserInterface): Promise<User | null> {
        return await this.userService.createUser(user)
    }
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers()
    }
    async getUserById(id: string): Promise<User> {
        return await this.userService.getUserById(id)
    }
    async updateUser(id: string, item: Partial<UserInterface>): Promise<User | boolean> {

        return await this.userService.updateUser(id, item)
    }
    async deleteUser(id: string): Promise<boolean> {
        return await this.userService.deleteUser(id)
    }
}