import MySqlFavoriteInterface from "../favorite/MySqlFavoriteInterface";

export default interface MySqlFavoriteAccesorInterface {
    fetchFavorite(userId: number): Promise<MySqlFavoriteInterface[]>;
    find(userId: number, productId: string): Promise<MySqlFavoriteInterface>;
    addItem(userId: number, productId: string): Promise<void>;
    removeItem(userId: number, productId: string): Promise<void>;
}