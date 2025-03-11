import MySqlCartInterface from "../../../../sql/domain/cart/MySqlCartInterface";
import Cart from "../../../domain/cart/Cart";
import GetterCartItems from "./GetterCartItems";

export default class SqlToCart {
    constructor(private readonly getterCartItems: GetterCartItems) {}

    public async get(sqlCart: MySqlCartInterface): Promise<Cart> {
        const cart = new Cart({
            id: sqlCart.id,
            total: 0,
            products: await this.getterCartItems.get(sqlCart.id)
        });
        return Promise.resolve(cart);
    }
}