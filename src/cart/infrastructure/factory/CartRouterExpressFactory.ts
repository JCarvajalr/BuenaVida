import CartService from "../../application/service/CartService";
import CartUseCase from "../../application/usecase/CartUseCase";
import CartControllerExpress from "../express/controller/CartControllerExpress";
import CartRouterExpress from "../express/router/CartRouterExpress";
import CartDbRepositoryFactory from "./CartDbRepositoryFactory";

export default class CartRouterExpressFactory {
    public static create(): CartRouterExpress {
        const cartService = new CartService(CartDbRepositoryFactory.create());
        const cartUseCase = new CartUseCase(cartService);
        const cartControllerExpress = new CartControllerExpress(cartUseCase);

        return new CartRouterExpress(cartControllerExpress);
    }
}