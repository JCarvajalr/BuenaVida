import MySqlCartAccesorInterface from "../../../sql/domain/interfaces/MySqlCartAccesorInterface";
import Cart from "../../domain/cart/Cart";
import NullCart from "../../domain/cart/NullCart";
import DbCartRepositoryPort from "../../domain/port/driven/DbCartRepositoryPort";
import SqlToCart from "./helpers/SqlToCart";

export default class DbCartRepository implements DbCartRepositoryPort {
    constructor(
        private readonly sql: MySqlCartAccesorInterface,
        private readonly sqlToCart: SqlToCart
    ) {}
    
    public async get(id: number): Promise<Cart> {
        const sqlCart = await this.sql.fetchCart(Number(id));
        if (!sqlCart) {
            return Promise.resolve(new NullCart());
        }
        const cart = await this.sqlToCart.get(sqlCart);
        
        return Promise.resolve(cart);
    }
    
    public async addItem(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.sql.addItem(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async deleteItem(userId: number, productId: string): Promise<boolean> {
        const success = await this.sql.removeItem(userId, productId);
        return Promise.resolve(success);
    }

    public async increaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.sql.increaseItem(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async decreaseQuantity(userId: number, productId: string, quantity: number): Promise<boolean> {
        const success = await this.sql.decreaseItem(userId, productId, quantity);
        return Promise.resolve(success);
    }

    public async emptyCart(userId: number): Promise<void> {
        const success = await this.sql.empty(userId);
    }

    public async payCart(userId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}