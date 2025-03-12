import MySqlUserAccesor from "../../../sql/infrastructure/database/userSql/MySqlUserAccesor"
import { UserInterface } from "../../domain/AbstractUser"
import { RegisterUserInterface } from "../../domain/auth/AbstractRegisterUser"
import UserRepositoryPort from "../../domain/port/driven/UserRepostoryPort"

export default class UserRepository implements UserRepositoryPort {
    constructor(private readonly sqlUserAccesor: MySqlUserAccesor) {}

    public async create(user: RegisterUserInterface): Promise<UserInterface | null> {
        return await this.sqlUserAccesor.create(user);
    }
    
    public async findByEmail(email: string): Promise<UserInterface> {
        return await this.sqlUserAccesor.findByEmail(email);
    }

    public async findAll(): Promise<UserInterface[]> {
        return await this.sqlUserAccesor.findAll();
    }

    public async findById(id: string): Promise<UserInterface> {
        return await this.sqlUserAccesor.findById(id);
    }

    public async update(id: string, item: Partial<UserInterface>): Promise<UserInterface | boolean> {
        return await this.sqlUserAccesor.update(id, item);
    }

    public async delete(id: string): Promise<boolean> {
        return await this.sqlUserAccesor.delete(id);
    }

    public save = (_item: UserInterface) => {
        throw new Error("Method not implemented.");
    }

    public patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.");
    }
}
