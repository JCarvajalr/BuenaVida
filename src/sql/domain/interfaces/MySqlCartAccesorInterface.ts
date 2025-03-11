import MySqlCartInterface from "../cart/MySqlCartInterface";
import MySqlCartItemInterface from "../cart/MySqlCartItemInterface";

export default interface MySqlCartAccesorInterface {
    fetchCart(userId: number): Promise<MySqlCartInterface>;
    fetchCartItems(userId: number): Promise<MySqlCartItemInterface[]>;
    addItem(userId: number, productId: string, quantity: number): Promise<boolean>;
    removeItem(userId: number, productId: string): Promise<boolean>;
    increaseItem(userId: number, productId: string, quantity: number): Promise<boolean>;
    decreaseItem(userId: number, productId: string, quantity: number): Promise<boolean>;
    empty(userId: number): Promise<void>;
}