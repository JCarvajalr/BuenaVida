import Favorite from "../Favorite";

export default interface FavoritesServiceInterface {
    retrieveFavorites(userId: number): Promise<Favorite>;
    findById(userId: number, productId: string): Promise<boolean>;
    add(userId: number, productId: string): Promise<void>;
    remove(userId: number, productId: string): Promise<void>;
}