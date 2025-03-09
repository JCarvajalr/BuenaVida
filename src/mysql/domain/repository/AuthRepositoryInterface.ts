import MySqlPermissionInterface from "../role/MySqlPermissionInterface";
import MySqlRoleInterface from "../role/MySqlRoleInterface";
import MySqlUserInterface from "../user/MySqlUserInterface";

export default interface AuthRepositoryInterface {
    login(user: string, pwd: string): Promise<string>;
    register(user: MySqlUserInterface): Promise<boolean>;
    logout(token: string): Promise<boolean>;
    detokenize(token: string): Promise<MySqlUserInterface>;
    verifyPermitions(token: string): Promise<boolean>;
    changeUserRoles(token: string, email: string, roleName: string): Promise<boolean>;
    getRoles(): Promise<MySqlRoleInterface[]>;
    getPermission(token: string): Promise<MySqlPermissionInterface[]>;
    addRol(role: MySqlRoleInterface): Promise<boolean>;
    addPermiso(permission: MySqlPermissionInterface): Promise<boolean>;
    addNewRelationRolPermiso(roleId: number, permissionName: string): Promise<boolean>;
    removeRelationRolPermiso(roleId: number, permissionName: string): Promise<boolean>;
}