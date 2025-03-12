import MySqlFavoriteAccesorInterface from "../../../sql/domain/interfaces/MySqlFavoriteAccesorInterface";
import Favorite from "../../domain/Favorite";
import NullFavorite from "../../domain/NullFavorite";
import DbFavoritesRepositoryInterface from "../../domain/port/driven/DbFavoritesRepositoryInterface";
import SqlToFavorite from "./helpers/SqlToFavorite";

export default class DbFavoritesRepository implements DbFavoritesRepositoryInterface{
    constructor(
        private readonly sql: MySqlFavoriteAccesorInterface,
        private readonly sqlToFavorite: SqlToFavorite
    ) {}

    public async get(userId: number): Promise<Favorite> {
        const sqlFavorites = await this.sql.fetchFavorite(userId);
        if (!sqlFavorites) {
            return Promise.resolve(new NullFavorite());
        }
        const favorite = this.sqlToFavorite.get(sqlFavorites);
        return Promise.resolve(favorite);
    }

    public async addProduct(userId: number, productId: string): Promise<void> {
        Promise.resolve(await this.sql.addItem(userId, productId))
    }

    public async removeProduct(userId: number, productId: string): Promise<void> {
        Promise.resolve(await this.sql.removeItem(userId, productId))
    }
}