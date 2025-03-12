import MySqlCartItemInterface from "../../../../sql/domain/cart/MySqlCartItemInterface";
import Cart from "../../../domain/cart/Cart";
import CartItem from "../../../domain/itemCart/CartItem";
import GetterCartItems from "./GetterCartItems";

export default class SqlToCart {
    constructor(private readonly getterCartItems: GetterCartItems) {}

    public async get(sqlCartItems: MySqlCartItemInterface[], cartId: number) {      
        const cartItems = await this.getterCartItems.get(sqlCartItems);
        const cart = new Cart({
            id: cartId,
            total: this.getTotal(cartItems),
            products: cartItems,
        })
        
        return Promise.resolve(cart);
    }

    private getTotal(cartItems: CartItem[]): number {
        let sumTotal = 0;
        cartItems.forEach(itemCart => {
            sumTotal += (itemCart.getQuantity() * itemCart.getProduct().getPrice());
        });
        return sumTotal;
    }

}