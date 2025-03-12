import { Router } from "express";
import FavoritesRouterExpressInterface from "../../../domain/interfaces/FavoritesRouterExpressInterface";
import FavoritesControllerExpressInterface from "../../../domain/interfaces/FavoritesControllerExpressInterface";

export default class FavoriteRouterExpress implements FavoritesRouterExpressInterface{
    router: Router;
    path: string;

    constructor(private readonly favoriteController: FavoritesControllerExpressInterface) {
        this.router = Router();
        this.path = "/favorite";
        this.routes();
    }

    public getFavorites(): void {
        throw new Error("Method not implemented.");
    }

    public addFavorite(): void {
        throw new Error("Method not implemented.");
    }

    public removeFavorite(): void {
        throw new Error("Method not implemented.");
    }
    
    public routes(): void {
        throw new Error("Method not implemented.");
    }
    
}