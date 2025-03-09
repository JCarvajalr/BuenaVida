import Cart from "../../domain/Cart";
import CartServiceInterface from "../../domain/interfaces/CartServiceInterface";
import CartUseCasePort from "../../domain/port/driver/CartUseCasePort";

export default class CartUseCase implements CartUseCasePort {
    constructor(private readonly cartService: CartServiceInterface) {}

    public async getCart(): Promise<Cart> {
        const cart = await this.cartService.retrieveCart();
        return cart;
    }

    public async addProduct(productId: string): Promise<boolean> {
        return this.cartService.addProduct(productId);
    }

    public async deleteProduct(productId: string): Promise<void> {
        this.cartService.deleteProduct(productId);
    }

    public async emptyCart(): Promise<void> {
        this.cartService.deleteAll();
    }
}