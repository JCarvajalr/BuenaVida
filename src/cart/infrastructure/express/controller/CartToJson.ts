import ProductsToJson from "../../../../product/infrastructure/express/controller/ProductsToJson";
import FullCartInterface from "../../../domain/api/FullCartInterface";
import Cart from "../../../domain/cart/Cart";

export default class CartToJson {
    public static get(cart: Cart): FullCartInterface {
        const jsonCart = {
            id: cart.getId(),
            total: cart.getTotal(),
            products: cart.getProducts().map((cartItem) => {
                return {
                    product: ProductsToJson.getOne(cartItem.getProduct()),
                    quantity: cartItem.getQuantity(),
                    subTotal: cartItem.getSubTotal(),
                }
            })
        }
        return jsonCart;
    }
}