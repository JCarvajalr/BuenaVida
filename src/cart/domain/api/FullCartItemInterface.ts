import { ProductInterface } from "../../../product/domain/product/AbstractProduct";

export default interface FullCartItemInterface {
    product: ProductInterface;
    quantity: number;
    subTotal: number;
}