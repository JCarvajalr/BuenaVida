import Cart from "../Cart";

export default interface CartServiceInterface {
    retrieveCart(): Promise<Cart>;
    addProduct(productId: string): Promise<boolean>;
    deleteProduct(productId: string): Promise<void>;
    deleteAll(): Promise<void>;
}