import Cart from "../../domain/cart/Cart";
import CartServiceInterface from "../../domain/interfaces/CartServiceInterface";
import CartRepositoryPort from "../../domain/port/driven/DbCartRepositoryPort";

export default class CartService implements CartServiceInterface {
    constructor(private readonly cartRepository: CartRepositoryPort) {}
    
    public async retrieveCart(): Promise<Cart> {
        const cart = await this.cartRepository.findAll();
        let c = cart[0];
        return c;
    }

    public async addProduct(productId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async deleteProduct(productId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    public async deleteAll(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}