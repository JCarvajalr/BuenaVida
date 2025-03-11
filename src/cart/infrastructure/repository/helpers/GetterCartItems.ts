import MySqlCartItemAccesorInterface from "../../../../sql/domain/interfaces/MySqlCartItemAccesorInterface";
import { CartItemInterface } from "../../../domain/itemCart/AbstractCartItem";
import CartItem from "../../../domain/itemCart/CartItem";

export default class GetterCartItems {
    constructor(private readonly sqlCartItemAccesor: MySqlCartItemAccesorInterface) {}

    public async get(idCart: number): Promise<CartItem[]> {
        const sqlCartItems = await this.sqlCartItemAccesor.fetchCartItems(idCart);

        if (!sqlCartItems) {
            return [];
        }
        const cartItems = sqlCartItems.map((sqlCartItem) => {
            return new CartItem({
                product: sqlCartItem.productId,
                quantity: sqlCartItem.quantity
            })
        })

        return Promise.resolve(cartItems);
    }
}