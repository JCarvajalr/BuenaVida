import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface ProductControllerExpressInterface extends ControllerExpressInterface{
    getProducts(_req: Request, res: Response): Promise<void>;
}