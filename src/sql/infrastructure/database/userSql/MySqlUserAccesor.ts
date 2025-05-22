import { UserInterface } from "../../../../user/domain/AbstractUser";
import { RegisterUserInterface } from "../../../../user/domain/auth/AbstractRegisterUser";
import MySqlUserAccesorInterface from "../../../domain/interfaces/MySqlUserAccesorInterface";
import Database from "../Database";

export default class MySqlUserAccesor implements MySqlUserAccesorInterface {
    private readonly database = Database.getInstance();

    public async create(user: RegisterUserInterface): Promise<UserInterface | null> {
        const result = await this.database.executeQuery(
            `INSERT INTO user (name, surnames, email, password, role_idrole) 
            VALUES ("${user.names}", "${user.surnames}", "${user.email}", "${user.password}", "${user.role}")`
            // [user.names, user.surnames, user.email, user.password, user.role,]
        );
        
        if (result.affectedRows > 0) {
            return {...user, id: result.insertId};
        }
        return null
    }

    public async findByEmail(email: string): Promise<UserInterface> {
        const user = await this.database.executeQuery(
            `SELECT * FROM user WHERE email = ?`, [email]
        );
        return user[0];
    }

    public async findAll(): Promise<UserInterface[]> {
        const users = await this.database.executeQuery(
            `SELECT 
            idUser AS id,
            name AS names,
            surnames,
            email,
            password,
            role_idRole AS role 
            FROM user`
        );
        return users;
    }

    public async findById(id: string): Promise<UserInterface> {
        const user = await this.database.executeQuery(
            `SELECT * FROM user WHERE idUser = ?`, [id]
        );
        return user[0];
    }

    public async update(id: string, item: Partial<UserInterface>): Promise<boolean | UserInterface> {
        const fields = Object.keys(item).map(field => `${field} = ?`).join(', ');
        const values = Object.values(item);
        if (fields.length === 0) {
            return false;
        }
        const query = `UPDATE user SET ${fields} WHERE idUser = ?`;
        const result = await this.database.executeQuery(query, [...values, id]);

        return result.affectedRows > 0;
    }

    public async delete(id: string): Promise<boolean> {
        const success = await this.database.executeQuery(
            `CALL DeleteUser(?)`, [id]
        );
        return success.affectedRows > 0;
    }

    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }

    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}