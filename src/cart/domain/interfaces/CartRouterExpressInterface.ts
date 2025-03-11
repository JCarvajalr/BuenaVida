import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface CartRouterExpressInterface extends RouterExpressInterface {
    getCart(): void;
    addItem(): boolean;
    removeItem(): boolean;
    emptyCart(): void;
    increaseQuantity(): boolean;
    decreaseQuantity(): boolean;
    payCart(): boolean;
}