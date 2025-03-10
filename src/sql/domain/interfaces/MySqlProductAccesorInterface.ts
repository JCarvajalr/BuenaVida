import RepositoryInterface from "../../../repository/RepositoryInterface";
import MySqlProductInterface from "../product/MySqlProductInterface";

export default interface MySqlProductAccesorInterface {
    fetchAllProducts(): Promise<MySqlProductInterface[]>;
    fetchById(id: string): Promise<MySqlProductInterface>;
}