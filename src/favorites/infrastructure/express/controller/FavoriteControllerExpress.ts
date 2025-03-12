import { Request, Response } from "express";
import FavoritesControllerExpressInterface from "../../../domain/interfaces/FavoritesControllerExpressInterface";
import FavoritesUseCasePort from "../../../domain/port/driver/FavoritesUseCasePort";

export default class FavoriteControllerExpress implements FavoritesControllerExpressInterface{
    constructor(private readonly favoriteUseCase: FavoritesUseCasePort) {}
    
    public async get(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.userId);
            const favorite = await this.favoriteUseCase.get(userId);
            const jsonFavorite = {
                productsId: favorite.getProducts()
            }
            res.status(200).json(jsonFavorite);
        } catch (error) {
            res.status(400).send("Error")
        }
    }
    
    public async findById(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.userId);
        const productId = req.params.productId;

        const found = await this.favoriteUseCase.findById(userId, productId);
        res.status(200).json(found);
    }
    
    public async add(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.userId);
            const productId = req.params.productId;
            const favorite = await this.favoriteUseCase.addProduct(userId, productId);
            res.status(200).send(true);
        } catch (error) {
            res.status(400).send("Error");
        }
    }

    public async remove(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.userId);
            const productId = req.params.productId;
            const favorite = await this.favoriteUseCase.removeProduct(userId, productId);
            res.status(200).send(true);
        } catch (error) {
            res.status(400).send("Error");
        }
    }
}