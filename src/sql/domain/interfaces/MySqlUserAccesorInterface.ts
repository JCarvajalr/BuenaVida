import UserRepositoryPort from "../../../user/domain/port/driven/UserRepostoryPort";
import MySqlRoleInterface from "../role/MySqlRoleInterface";
import MySqlUserInterface from "../user/MySqlUserInterface";

export default interface MySqlUserAccesorInterface extends UserRepositoryPort {}