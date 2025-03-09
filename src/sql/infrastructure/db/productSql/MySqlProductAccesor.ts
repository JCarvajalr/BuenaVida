import MySqlProductInterface from "../../../domain/product/MySqlProductInterface";
import MySqlProductAccesorInterface from "../../../domain/repository/MySqlProductAccesorInterface";
import Database from "../Database";

export default class MySqlProductAccesor implements MySqlProductAccesorInterface{
    private readonly database = Database.getInstance();
    
    public async fetchAllProducts(): Promise<MySqlProductInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idProduct, 
            name, 
            description, 
            price, 
            state, 
            stock, 
            Category_idCategory, 
            image 
            FROM product`
        );
        return rows;
    }

    public async fetchById(id: string): Promise<MySqlProductInterface> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idProduct, 
            name, 
            description, 
            price, 
            state, 
            stock, 
            Category_idCategory, 
            image 
            FROM product WHERE idProduct = ?`, [id]
        );
        return rows;
    }
}