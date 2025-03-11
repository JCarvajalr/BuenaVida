import Cart from "../../domain/cart/Cart";
import CartServiceInterface from "../../domain/interfaces/CartServiceInterface";
import CartRepositoryPort from "../../domain/port/driven/DbCartRepositoryPort";

export default class CartService implements CartServiceInterface {
    constructor(private readonly cartRepository: CartRepositoryPort) {}
    
    public async retrieveCart(userId: number): Promise<Cart> {
        const cart = await this.cartRepository.get(userId);
        return Promise.resolve(cart);
    }

    public async addItem(userId: number, productId: string, quantity: number): Promise<boolean> {
        const succes = await this.cartRepository.addItem(userId, productId, quantity);
        return Promise.resolve(succes);
    }

    public async deleteItem(userId: number, productId: string): Promise<boolean> {
        const succes = await this.cartRepository.deleteItem(userId, productId);
        return Promise.resolve(succes);
    }

    public async increaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const succes = await this.cartRepository.increaseQuantity(userId, productId, quantity);
        return Promise.resolve(succes);
    }

    public async decreaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const succes = await this.cartRepository.decreaseQuantity(userId, productId, quantity);
        return Promise.resolve(succes);
    }

    public async emptyCart(userId: number): Promise<boolean> {
        const succes = await this.cartRepository.emptyCart(userId);
        return Promise.resolve(succes);
    }

    public async payCart(userId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}