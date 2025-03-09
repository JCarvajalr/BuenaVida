import AuthRepositoryInterface from "../../../domain/repository/AuthRepositoryInterface";
import MySqlPermissionInterface from "../../../domain/role/MySqlPermissionInterface";
import MySqlRoleInterface from "../../../domain/role/MySqlRoleInterface";
import MySqlUserInterface from "../../../domain/user/MySqlUserInterface";
import Database from "../Database";

export default class MySqlAuthRepository implements AuthRepositoryInterface {
    private readonly database = Database.getInstance();
    
    login(user: string, pwd: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    register(user: MySqlUserInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    logout(token: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    detokenize(token: string): Promise<MySqlUserInterface> {
        throw new Error("Method not implemented.");
    }
    verifyPermitions(token: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    changeUserRoles(token: string, email: string, roleName: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getRoles(): Promise<MySqlRoleInterface[]> {
        throw new Error("Method not implemented.");
    }
    getPermission(token: string): Promise<MySqlPermissionInterface[]> {
        throw new Error("Method not implemented.");
    }
    addRol(role: MySqlRoleInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addPermiso(permission: MySqlPermissionInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addNewRelationRolPermiso(roleId: number, permissionName: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    removeRelationRolPermiso(roleId: number, permissionName: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}