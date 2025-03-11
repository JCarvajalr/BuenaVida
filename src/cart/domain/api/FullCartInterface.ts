import { ProductInterface } from "../../../product/domain/product/AbstractProduct";
import { CartItemInterface } from "../itemCart/AbstractCartItem";

export default interface FullCartInterface {
    id: number;
    products: CartItemInterface[];
}