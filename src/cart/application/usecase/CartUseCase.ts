import Cart from "../../domain/cart/Cart";
import CartServiceInterface from "../../domain/interfaces/CartServiceInterface";
import CartUseCasePort from "../../domain/port/driver/CartUseCasePort";

export default class CartUseCase implements CartUseCasePort {
    constructor(private readonly cartService: CartServiceInterface) {}
    
    public async getCart(userId: number): Promise<Cart> {
        const cart = await this.cartService.retrieveCart(userId);
        return Promise.resolve(cart);
    }

    public async addProduct(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.cartService.addItem(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async deleteProduct(userId: number, productId: string): Promise<boolean> {
        const success = await this.cartService.deleteItem(userId, productId);
        return Promise.resolve(success);
    }

    public async increaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.cartService.increaseQuantity(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async decreaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.cartService.decreaseQuantity(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async emptyCart(userId: number): Promise<boolean> {
        const success = await this.cartService.emptyCart(userId);
        return Promise.resolve(success);
    }

    public async payCart(userId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}