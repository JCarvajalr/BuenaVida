import AbstractProduct from "../../../product/domain/product/AbstractProduct";

export default abstract class AbstractCartItem {
    protected product: string;
    protected quantity: number;

    constructor(cartItem: CartItemInterface) {
        this.product = cartItem.product;
        this.quantity = cartItem.quantity;
    }

    public abstract isNull(): boolean;

    public getId = (): string => this.product;

    public getQuantity = (): number => this.quantity
}

interface CartItemInterface {
    product: string;
    quantity: number;
} export { CartItemInterface }