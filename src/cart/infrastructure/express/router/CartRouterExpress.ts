import { Router } from "express";
import CartRouterExpressInterface from "../../../domain/interfaces/CartRouterExpressInterface";
import CartControllerExpressInterface from "../../../domain/interfaces/CartControllerExpressInterface";

export default class CartRouterExpress implements CartRouterExpressInterface {
    router: Router;
    path: string;
    
    constructor(private readonly cartController: CartControllerExpressInterface) {
        this.router = Router();
        this.path = "/cart";
        this.routes();
    }

    public routes(): void {
        
        throw new Error("Method not implemented.");
    }

    getCart(): void {
        this.router.get("/get/:id", this.cartController.getCart.bind(this.cartController));
    }

    getCartResume(): void {
        // this.router.get("/get", this.cartController.getCart.bind(this.cartController));
    }

    addItem(): void {
        this.router.get("/add/:id", this.cartController.addProduct.bind(this.cartController));
    }

    removeItem(): void {
        this.router.get("/remove/:id", this.cartController.removeProduct.bind(this.cartController));
    }

    emptyCart(): void {
        this.router.get("/empty", this.cartController.emptyCart.bind(this.cartController));
    }

    increaseQuantity(): void {
        throw new Error("Method not implemented.");
    }
    decreaseQuantity(): void {
        throw new Error("Method not implemented.");
    }
    payCart(): void {
        throw new Error("Method not implemented.");
    }

}