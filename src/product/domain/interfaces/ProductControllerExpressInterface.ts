import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface ProductControllerExpressInterface extends ControllerExpressInterface{
    getProducts(_req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    getByName(req: Request, res: Response): Promise<void>;
    getByPage(req: Request, res: Response): Promise<void>;
    getPageCount(_req: Request, res: Response): Promise<void>;
    getByPrice(req: Request, res: Response): Promise<void>;
    getByCategory(req: Request, res: Response): Promise<void>;
}