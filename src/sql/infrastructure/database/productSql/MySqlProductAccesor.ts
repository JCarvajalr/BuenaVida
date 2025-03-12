import MySqlProductInterface from "../../../domain/product/MySqlProductInterface";
import MySqlProductAccesorInterface from "../../../domain/interfaces/MySqlProductAccesorInterface";
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
            Category_idCategory, 
            image 
            FROM product WHERE idProduct = ?`, [id]
        );
        return rows[0];
    }

    public async fetchByName(search: string): Promise<MySqlProductInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idProduct, 
            name, 
            description, 
            price, 
            Category_idCategory, 
            image 
            FROM product WHERE name LIKE ?`, [`%${search}%`]
        );
        return rows;
    }

    public async getByPrice(min: number, max: number): Promise<MySqlProductInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idProduct,
            name,
            description,
            price,
            Category_idCategory,
            image
            FROM Product
            WHERE price BETWEEN ? AND ?`, [min, max]
        );
        return rows;
    }

    public async getByCategory(categoryId: number): Promise<MySqlProductInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            idProduct,
            name,
            description,
            price,
            Category_idCategory,
            image
            FROM Product
            WHERE Category_idCategory = ?`, [categoryId]
        );
        return rows;
    }
}