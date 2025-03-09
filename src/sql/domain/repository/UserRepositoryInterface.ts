import MySqlRoleInterface from "../role/MySqlRoleInterface";
import MySqlUserInterface from "../user/MySqlUserInterface";

export default interface UserRepositoryInterface {
    fetchUsers(): Promise<MySqlUserInterface[]>;
    fetchUsersById(id: string): Promise<MySqlUserInterface> ;
    fetchUsersByEmail(email: string): Promise<MySqlUserInterface> ;
    fetchUsersRole(roleId: number): Promise<MySqlRoleInterface>;
    createUsers(user: MySqlUserInterface): Promise<boolean>;
    updateUsers(id: string, usuario: MySqlUserInterface): Promise<boolean>;
    deleteUsers(id: string): Promise<boolean>;
    forgotPwd(email: string, newPwd: string): Promise<boolean>;
}