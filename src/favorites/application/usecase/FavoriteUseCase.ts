import Favorite from "../../domain/Favorite";
import FavoritesServiceInterface from "../../domain/interfaces/FavoritesServiceInterface";
import FavoritesUseCasePort from "../../domain/port/driver/FavoritesUseCasePort";

export default class FavoriteUseCase implements FavoritesUseCasePort {
    constructor(private readonly favoriteService: FavoritesServiceInterface) {}
    
    public get(userId: number): Promise<Favorite> {
        return Promise.resolve(this.favoriteService.retrieveFavorites(userId));
    }
    
    public findById(userId: number, productId: string): Promise<boolean> {
        return Promise.resolve(this.favoriteService.findById(userId, productId));
    }

    public addProduct(userId: number, productId: string): Promise<void> {
        return Promise.resolve(this.favoriteService.add(userId, productId));
    }

    public removeProduct(userId: number, productId: string): Promise<void> {
        return Promise.resolve(this.favoriteService.remove(userId, productId));
    }
    
}