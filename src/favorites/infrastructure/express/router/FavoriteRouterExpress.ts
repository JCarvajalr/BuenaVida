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
    
    public routes(): void {
        this.getFavorites();
        this.findProduct()
        this.addFavorite();
        this.removeFavorite();
    }

    public getFavorites(): void {
        this.router.get("/get/:userId", this.favoriteController.get.bind(this.favoriteController));
    }
    
    public findProduct(): void {
        this.router.get("/find/:userId/:productId", this.favoriteController.findById.bind(this.favoriteController));
    }
    
    public addFavorite(): void {
        this.router.post("/add/:userId/:productId", this.favoriteController.add.bind(this.favoriteController));
    }

    public removeFavorite(): void {
        this.router.delete("/delete/:userId/:productId", this.favoriteController.remove.bind(this.favoriteController));
    }   
}