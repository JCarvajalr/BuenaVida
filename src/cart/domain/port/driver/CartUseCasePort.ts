import Cart from "../../cart/Cart";

export default interface CartUseCasePort {
    getCart(userId: number): Promise<Cart>;
    addProduct(userId: number, productId: string, quantity: number): Promise<boolean>;
    deleteProduct(userId: number, productId: string): Promise<boolean>;
    increaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean>;
    decreaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean>;
    emptyCart(userId: number): Promise<boolean>;
    payCart(userId: number): Promise<boolean>;
}