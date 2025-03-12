import { Request, Response } from 'express'
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface FavoritesControllerExpressInterface extends ControllerExpressInterface {
    get(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    add(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
}