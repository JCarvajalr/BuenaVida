import MySqlCategoryInterface from "../../../domain/product/MySqlCategoryInterface";
import MySqlCategoryAccesorInterface from "../../../domain/repository/MySqlCategoryAccesorInterface";
import Database from "../Database";

export default class MySqlCategoryAccesor implements MySqlCategoryAccesorInterface {
    private readonly database = Database.getInstance();
        
    public async fetchById(id: number): Promise<MySqlCategoryInterface> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idCategory, 
            name, 
            description 
            FROM category WHERE idCategory = ?`, [id]
        );
        return rows[0];
    }
}