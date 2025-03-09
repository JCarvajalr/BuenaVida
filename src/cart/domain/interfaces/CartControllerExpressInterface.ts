import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface CartControllerExpressInterface extends ControllerExpressInterface{
    getCart(_req: Request, res: Response): Promise<void>;
}