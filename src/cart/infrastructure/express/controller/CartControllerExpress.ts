import { Request, Response } from 'express'
import CartControllerExpressInterface from "../../../domain/interfaces/CartControllerExpressInterface";
import CartUseCasePort from "../../../domain/port/driver/CartUseCasePort";
import CartToJson from "./CartToJson";

export default class CartControllerExpress implements CartControllerExpressInterface {
    
    constructor(private readonly cartUseCase: CartUseCasePort) {}
    
    public async getCart(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.id);
        const cart = await this.cartUseCase.getCart(userId);
        if (cart === undefined || cart === null || cart.isNull()) {
            res.status(404).send("Products not found");
        } else {
            const jsonProducts = CartToJson.get(cart);
            res.status(200).json(jsonProducts);
        }
    }
    
    public async getCartResume(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.id);
        const cartResume = await this.cartUseCase.getCartResume(userId);
        if (cartResume === undefined || cartResume === null) {
            res.status(404).send("Products not found");
        } else {
            res.status(200).json(cartResume);
        }
    }
    
    public async addProduct(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.userId);
        const productId = req.params.productId;
        const quantity = Number(req.params.quantityId);
        const success = await this.cartUseCase.addProduct(userId, productId, quantity);
        if (success) {
            res.status(200).json({ succes: success });
        } else {
            res.status(404).json({ succes: success });
        }
    }
    
    public async removeProduct(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.userId);
        const productId = req.params.productId;
        const quantity = Number(req.params.quantityId);
        const success = await this.cartUseCase.deleteProduct(userId, productId);
        if (success) {
            res.status(200).json({ succes: success });
        } else {
            res.status(404).json({ succes: success });
        }
    }
    public async emptyCart(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.userId);
        const success = await this.cartUseCase.emptyCart(userId);
        if (success) {
            res.status(200).json({ succes: success });
        } else {
            res.status(404).json({ succes: success });
        }
        throw new Error('Method not implemented.');
    }
    increaseQuantity(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    }
    decreaseQuantity(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    }
    payCart(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    }
}