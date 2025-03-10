import MySqlUserAccesor from "../../../sql/infrastructure/database/userSql/MySqlUserAccesor"
import { UserInterface } from "../../domain/AbstractUser"
import { RegisterUserInterface } from "../../domain/auth/AbstractRegisterUser"
import UserRepositoryPort from "../../domain/port/driven/UserRepostoryPort"

export default class UserRepository implements UserRepositoryPort {
    constructor(private readonly sqlUserAccesor: MySqlUserAccesor) {
    }
    async create(user: RegisterUserInterface): Promise<UserInterface | null> {
        return await this.sqlUserAccesor.create(user)
    }
    async findByEmail(email: string): Promise<UserInterface> {
        return await this.sqlUserAccesor.findByEmail(email)
    }
    async findAll(): Promise<UserInterface[]> {
        return await this.sqlUserAccesor.findAll()
    };

    async findById(id: string): Promise<UserInterface> {
        return await this.sqlUserAccesor.findById(id)
    }
    async update(id: string, item: Partial<UserInterface>): Promise<UserInterface | boolean> {
        return await this.sqlUserAccesor.update(id, item)
    }
    async delete(id: string): Promise<boolean> {
        return await this.sqlUserAccesor.delete(id)
    }
    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}
