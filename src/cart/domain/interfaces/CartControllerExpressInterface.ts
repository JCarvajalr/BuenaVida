import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface CartControllerExpressInterface extends ControllerExpressInterface{
    getCart(_req: Request, res: Response): Promise<void>;
    addItem(req: Request, res: Response): Promise<boolean>;
    removeItem(req: Request, res: Response): Promise<boolean>;
    emptyCart(_req: Request, res: Response): Promise<void>;
    increaseQuantity(req: Request, res: Response): Promise<boolean>;
    decreaseQuantity(req: Request, res: Response): Promise<boolean>;
    payCart(req: Request, res: Response): Promise<boolean>;
}