import MySqlCartItemInterface from "../../../domain/cart/MySqlCartItemInterface";
import MySqlCartItemAccesorInterface from "../../../domain/interfaces/MySqlCartItemAccesorInterface";
import Database from "../Database";

export default class MySqlCartItemAccesor implements MySqlCartItemAccesorInterface {
    private readonly database = Database.getInstance();
    
    public async fetchCartItems(id: number): Promise<MySqlCartItemInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            Product_idProduct, 
            quantity,
            Cart_User_idUser
            FROM cartitem WHERE Product_idProduct = ?`, [id]
        );
        return rows;
    }
    
}