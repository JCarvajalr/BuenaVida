import Favorite from "../../Favorite";

export default interface FavoritesUseCasePort {
    get(userId: number): Promise<Favorite>;
    addProduct(userId: number, productId: string): Promise<void>;
    removeProduct(userId: number, productId: string): Promise<void>;
}