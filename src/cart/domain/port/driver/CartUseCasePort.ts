import Cart from "../../cart/Cart";

export default interface CartUseCasePort {
    getCart(): Promise<Cart>;
    addProduct(productId: string): Promise<boolean>;
    deleteProduct(productId: string): Promise<void>;
    emptyCart(): Promise<void>;
}