import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface CartRouterExpressInterface extends RouterExpressInterface {
    getCart(): void;
    getCartResume(): void;
    addItem(): void;
    removeItem(): void;
    emptyCart(): void;
    increaseQuantity(): void;
    decreaseQuantity(): void;
    payCart(): void;
}