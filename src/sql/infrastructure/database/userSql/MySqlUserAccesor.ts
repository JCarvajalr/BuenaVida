import { UserInterface } from "../../../../user/domain/AbstractUser";
import { RegisterUserInterface } from "../../../../user/domain/auth/AbstractRegisterUser";
import MySqlUserAccesorInterface from "../../../domain/interfaces/MySqlUserAccesorInterface";
import Database from "../Database";

export default class MySqlUserAccesor implements MySqlUserAccesorInterface {
    private readonly database = Database.getInstance();

    public async create(user: RegisterUserInterface): Promise<UserInterface | null> {
        const query = `
            INSERT INTO buenavidaparcial.users (names, surnames, email, password, role) 
            VALUES (?, ?, ?, ?, ?);
        `;
        const values = [
            user.names,
            user.surnames,
            user.email,
            user.password,
            user.role,
        ];
        Database.getInstance();
        const result = await this.database.executeQuery(query, values);

        if (result.affectedRows > 0) {
            return {...user, id: result.insertId};
        }
        return null
    }

    public async findByEmail(email: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE email = ?;';
        let res = await this.database.executeQuery(query, [email]);
        res = res[0]
        return res
    }

    public async findAll(): Promise<UserInterface[]> {
        const query = 'SELECT * FROM buenavidaparcial.users;';
        return await this.database.executeQuery(query);
    };
    public async findById(id: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE id = ?;';
        let res = await this.database.executeQuery(query, [id]);
        res = res[0]
        return res;
    }
    public async update(id: string, item: Partial<UserInterface>): Promise<boolean | UserInterface> {
        const fields = Object.keys(item).map(field => `${field} = ?`).join(', ');
        const values = Object.values(item);
        if (fields.length === 0) {
            return false;
        }
        const query = `UPDATE buenavidaparcial.users SET ${fields} WHERE id = ?;`;
        const result = await this.database.executeQuery(query, [...values, id]);

        return result.affectedRows > 0;
    }

    public async delete(id: string): Promise<boolean> {
        const query = 'DELETE FROM buenavidaparcial.users WHERE id = ?;';
        const result = await this.database.executeQuery(query, [id]);
        return result.affectedRows > 0;
    }
    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}