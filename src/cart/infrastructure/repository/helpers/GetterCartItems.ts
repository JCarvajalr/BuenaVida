import MySqlCartItemInterface from "../../../../sql/domain/cart/MySqlCartItemInterface";
import MySqlCartItemAccesorInterface from "../../../../sql/domain/interfaces/MySqlCartItemAccesorInterface";
import { CartItemInterface } from "../../../domain/itemCart/AbstractCartItem";
import CartItem from "../../../domain/itemCart/CartItem";

export default class GetterCartItems {
    constructor() {}

    public async get(sqlCart: MySqlCartItemInterface[]): Promise<CartItem[]> {
        const cartItems = sqlCart.map((sqlCartItem) => {
            return new CartItem({
                product: sqlCartItem.productId,
                quantity: sqlCartItem.quantity
            })
        })

        return Promise.resolve(cartItems);
    }
}