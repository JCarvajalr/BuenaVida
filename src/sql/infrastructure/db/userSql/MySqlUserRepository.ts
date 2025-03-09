import UserRepositoryInterface from "../../../domain/repository/UserRepositoryInterface";
import MySqlRoleInterface from "../../../domain/role/MySqlRoleInterface";
import MySqlUserInterface from "../../../domain/user/MySqlUserInterface";
import Database from "../Database";

export default class MySqlUserRepository implements UserRepositoryInterface {
    private readonly db = Database.getInstance();
    
    fetchUsers(): Promise<MySqlUserInterface[]> {
        throw new Error("Method not implemented.");
    }
    fetchUsersById(id: string): Promise<MySqlUserInterface> {
        throw new Error("Method not implemented.");
    }
    fetchUsersByEmail(email: string): Promise<MySqlUserInterface> {
        throw new Error("Method not implemented.");
    }
    fetchUsersRole(roleId: number): Promise<MySqlRoleInterface> {
        throw new Error("Method not implemented.");
    }
    createUsers(user: MySqlUserInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateUsers(id: string, usuario: MySqlUserInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteUsers(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    forgotPwd(email: string, newPwd: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}