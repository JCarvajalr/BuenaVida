import RepositoryInterface from "../../../repository/RepositoryInterface";
import MySqlProductInterface from "../product/MySqlProductInterface";

export default interface MySqlProductAccesorInterface {
    fetchAllProducts(): Promise<MySqlProductInterface[]>;
    fetchById(id: string): Promise<MySqlProductInterface>;
    fetchByName(search: string): Promise<MySqlProductInterface[]>;
    getByPage(page: number): Promise<MySqlProductInterface[]>
    getPageCount(): Promise<number>
    getByPrice(min: number, max: number): Promise<MySqlProductInterface[]>;
    getByCategory(categoryId: number): Promise<MySqlProductInterface[]>;
}