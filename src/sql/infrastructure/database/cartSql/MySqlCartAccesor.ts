import MySqlCartAccesorInterface from "../../../domain/interfaces/MySqlCartAccesorInterface";
import MySqlCartInterface from "../../../domain/cart/MySqlCartInterface";
import MySqlCartItemInterface from "../../../domain/cart/MySqlCartItemInterface";
import Database from "../Database";

export default class MySqlCartAccesor implements MySqlCartAccesorInterface{
    private readonly database = Database.getInstance();
    
    // Return just the cart
    public async fetchCart(userId: number): Promise<MySqlCartInterface> {
        const rows = await this.database.executeQuery(
            `SELECT 
            User_idUser 
            FROM cart WHERE User_idUser = ?`, [userId]
        );
        return Promise.resolve(rows[0]);
    }
    
    public async fetchCartItems(userId: number): Promise<MySqlCartItemInterface[]> {
        const rows = await this.database.executeQuery(
            `SELECT 
            p.idProduct,
            p.name,
            p.description,
            p.price,
            p.Category_idCategory,
            p.image,
            ci.quantity
            FROM CartItem ci
            JOIN Product p ON ci.Product_idProduct = p.idProduct
            WHERE ci.Cart_User_idUser = ?`, [userId]
        );
        return Promise.resolve(rows);
    }
    
    public async addItem(userId: number, productId: string, quantity: number): Promise<boolean> {
        try {
            const [[{ success }]]: any = await this.database.executeQuery(
                "CALL AddProductToCart(?, ?, ?)", [userId, productId, quantity]);

            return Promise.resolve(Boolean(success));
        } catch (error) {
            console.error("Error al ejecutar el procedimiento:", error);
            return Promise.resolve(false);
        }
    }

    public async removeItem(userId: number, productId: string): Promise<boolean> {
        try {
            const [[{ success }]]: any = await this.database.executeQuery(
                "CALL RemoveCartItem(?, ?)", [userId, productId]);

            return Promise.resolve(Boolean(success));
        } catch (error) {
            console.error("Error al ejecutar el procedimiento:", error);
            return Promise.resolve(false);
        }
    }

    public async increaseItem(userId: number, productId: string, quantity: number): Promise<boolean> {
        try {
            const [[{ success }]] = await this.database.executeQuery(
                "CALL IncreaseCartItemQuantity(?, ?, ?)", [userId, productId, quantity,]);
        
            return Promise.resolve(Boolean(success));
        } catch (error) {
            return Promise.resolve(false);
        }
    }

    public async decreaseItem(userId: number, productId: string, quantity: number): Promise<boolean> {
        try {
            const [[{ success }]] = await this.database.executeQuery(
                "CALL DecreaseCartItemQuantity(?, ?, ?)", [userId, productId, quantity,]);
        
            return Promise.resolve(Boolean(success));
        } catch (error) {
            return Promise.resolve(false);
        }
    }

    public async empty(userId: number): Promise<boolean> {
        try {
            const rows = await this.database.executeQuery(
                `DELETE FROM CartItem WHERE Cart_User_idUser = ?`, [userId]
            );
            return Promise.resolve(true);
        } catch (error) {
            return Promise.resolve(false);
        }
    }
}