import MySqlFavoriteInterface from "../../../domain/favorite/MySqlFavoriteInterface";
import MySqlFavoriteAccesorInterface from "../../../domain/interfaces/MySqlFavoriteAccesorInterface";
import Database from "../Database";

export default class MySqlSavoriteAccesor implements MySqlFavoriteAccesorInterface{
    private readonly database = Database.getInstance();
    
    public async fetchFavorite(userId: number): Promise<MySqlFavoriteInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            Product_idProduct 
            FROM Favorites 
            WHERE User_idUser = ?`, [userId]);
        return Promise.resolve(rows);
    }
    
    public async addItem(userId: number, productId: string): Promise<void> {
        const rows = await this.database.executeQuery(
            `INSERT INTO Favorites (User_idUser, Product_idProduct) VALUES (?, ?)`, [userId, productId]);
    }

    public async removeItem(userId: number, productId: string): Promise<void> {
        const rows = await this.database.executeQuery(
            `DELETE FROM Favorites WHERE User_idUser = ? AND Product_idProduct = ?`, [userId, productId]);
    }

}