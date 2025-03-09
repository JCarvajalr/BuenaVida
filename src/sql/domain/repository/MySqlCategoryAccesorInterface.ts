import MySqlCategoryInterface from "../product/MySqlCategoryInterface";

export default interface MySqlCategoryAccesorInterface {
    fetchById(id: number): Promise<MySqlCategoryInterface>;
}