import RepositoryInterface from "../../../../repository/RepositoryInterface";
import Cart from "../../cart/Cart";

export default interface DbCartRepositoryPort {
    get(userId: number): Promise<Cart>;
    addItem(userId: number, productId: string, quantity: number): Promise<boolean>;
    deleteItem(userId: number, productId: string): Promise<boolean>;
    increaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean>;
    decreaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean>;
    emptyCart(userId: number): Promise<boolean>;
    payCart(userId: number): Promise<boolean>;
}