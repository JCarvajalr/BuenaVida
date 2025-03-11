import MySqlCartInterface from "../../../../sql/domain/cart/MySqlCartInterface";
import MySqlCartItemInterface from "../../../../sql/domain/cart/MySqlCartItemInterface";
import Cart from "../../../domain/cart/Cart";
import GetterCartItems from "./GetterCartItems";

export default class SqlToCart {
    constructor(private readonly getterCartItems: GetterCartItems) {}

    public async get(sqlCart: MySqlCartItemInterface[], id: number): Promise<Cart> {
        if (sqlCart.length === 0) {
            return new Cart({
                id: id,
                products: []
            })
        }
        const cart = new Cart({
            id: id,
            products: await this.getterCartItems.get(sqlCart)
        });
        return Promise.resolve(cart);
    }
}