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
        //getCart
        this.router.get("/get", this.cartController.getCart.bind(this.cartController));
        //getCartResume
        this.router.get("/getresume", this.cartController.getCartResume.bind(this.cartController));
        //addItem
        this.router.post("/add", this.cartController.addProduct.bind(this.cartController));
        //removeItem
        this.router.delete("/remove", this.cartController.removeProduct.bind(this.cartController));
        //emptyCart
        this.router.delete("/empty", this.cartController.emptyCart.bind(this.cartController));
        //increaseQuantity
        this.router.post("/increase-quantity", this.cartController.increaseQuantity.bind(this.cartController));
        //decreaseQuantity
        this.router.post("/decrease-quantity", this.cartController.decreaseQuantity.bind(this.cartController));
        //payCart
        // this.router.put("/increase-quantity", this.cartController.increaseQuantity.bind(this.cartController));

    }
}