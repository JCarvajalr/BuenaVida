import { Request, Response } from 'express'
import CartControllerExpressInterface from "../../../domain/interfaces/CartControllerExpressInterface";
import CartUseCasePort from "../../../domain/port/driver/CartUseCasePort";
import CartToJson from "./CartToJson";

export default class CartControllerExpress implements CartControllerExpressInterface {
    
    constructor(private readonly cartUseCase: CartUseCasePort) {}

    public async getCart(_req: Request, res: Response): Promise<void> {
        const cart = await this.cartUseCase.getCart();
        const jsonProducts = CartToJson.get(cart);
        // if (jsonProducts.length === 0){
        //     res.status(404).send("Products not found");
        // } else {
        res.status(200).json(jsonProducts);
        // }
    }
}