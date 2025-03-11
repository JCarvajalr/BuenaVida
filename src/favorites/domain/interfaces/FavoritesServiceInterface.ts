import Favorite from "../Favorite";

export default interface FavoritesServiceInterface {
    retrieveFavorites(userId: number): Promise<Favorite>;
    add(userId: number, productId: string): Promise<void>;
    remove(userId: number, productId: string): Promise<void>;
}