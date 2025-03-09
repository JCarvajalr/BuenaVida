import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface CartRouterExpressInterface extends RouterExpressInterface {
    getCart(): void;
}