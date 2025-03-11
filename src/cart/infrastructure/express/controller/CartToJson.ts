import FullCartInterface from "../../../domain/api/FullCartInterface";
import Cart from "../../../domain/cart/Cart";

export default class CartToJson {
    public static get(cart: Cart): FullCartInterface {
        const jsonCart = {
            id: cart.getId(),
            products: cart.getProducts().map((cartItem) => {
                return {
                    product: cartItem.getId(),
                    quantity: cartItem.getQuantity(),
                }
            })
        }
        return jsonCart;
    }
}