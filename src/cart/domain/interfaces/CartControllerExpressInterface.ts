import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface CartControllerExpressInterface extends ControllerExpressInterface{
    getCart(req: Request, res: Response): Promise<void>;
    addProduct(req: Request, res: Response): Promise<void>;
    removeProduct(req: Request, res: Response): Promise<void>;
    emptyCart(req: Request, res: Response): Promise<void>;
    increaseQuantity(req: Request, res: Response): Promise<void>;
    decreaseQuantity(req: Request, res: Response): Promise<void>;
    payCart(req: Request, res: Response): Promise<void>;
}