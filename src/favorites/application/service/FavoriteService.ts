import Favorite from "../../domain/Favorite";
import FavoritesServiceInterface from "../../domain/interfaces/FavoritesServiceInterface";
import DbFavoritesRepositoryInterface from "../../domain/port/driven/DbFavoritesRepositoryInterface";

export default class FavoriteService implements FavoritesServiceInterface {
    constructor(private readonly favoriteRepository: DbFavoritesRepositoryInterface) {}
    
    public retrieveFavorites(userId: number): Promise<Favorite> {
        return Promise.resolve(this.favoriteRepository.get(userId));
    }

    public findById(userId: number, productId: string): Promise<boolean> {
        return Promise.resolve(this.favoriteRepository.findById(userId, productId));
    }

    public add(userId: number, productId: string): Promise<void> {
        return Promise.resolve(this.favoriteRepository.addProduct(userId, productId));
    }

    public remove(userId: number, productId: string): Promise<void> {
        return Promise.resolve(this.favoriteRepository.removeProduct(userId, productId));
    }
}