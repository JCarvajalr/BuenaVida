import MySqlPermissionInterface from "./MySqlPermissionInterface";

export default interface MySqlRoleInterface {
    id: number;
    name: string;
    description?: string;
    state?: boolean;
    permissions?: MySqlPermissionInterface[];
}