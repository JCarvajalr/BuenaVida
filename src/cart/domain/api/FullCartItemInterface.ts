import FullProductInterface from "../../../product/domain/api/FullProductInterface";

export default interface FullCartItemInterface {
    product: FullProductInterface;
    quantity: number;
    subTotal: number;
}