import { ProductInterface } from "../../../product/domain/product/AbstractProduct";
import { CartItemInterface } from "../itemCart/AbstractCartItem";
import FullCartItemInterface from "./FullCartItemInterface";

export default interface FullCartInterface {
    id: number;
    total: number;
    products: FullCartItemInterface[];
}