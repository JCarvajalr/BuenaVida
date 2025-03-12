import AbstractProduct from "../../../product/domain/product/AbstractProduct";

export default abstract class AbstractCartItem {
    protected product: AbstractProduct;
    protected quantity: number;
    protected subTotal: number;

    constructor(cartItem: CartItemInterface) {
        this.product = cartItem.product;
        this.quantity = cartItem.quantity;
        this.subTotal = cartItem.subTotal;
    }

    public abstract isNull(): boolean;

    public getProduct = (): AbstractProduct => this.product;

    public getQuantity = (): number => this.quantity
}

interface CartItemInterface {
    product: AbstractProduct;
    quantity: number;
    subTotal: number;
} export { CartItemInterface }