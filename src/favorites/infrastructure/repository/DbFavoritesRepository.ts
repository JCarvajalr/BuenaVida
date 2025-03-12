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
    
    public async findById(userId: number, productId: string): Promise<boolean> {
        const sqlFavorite = await this.sql.find(userId, productId);
        if (sqlFavorite === null || sqlFavorite === undefined) {
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    }

    public async addProduct(userId: number, productId: string): Promise<void> {
        Promise.resolve(await this.sql.addItem(userId, productId))
    }

    public async removeProduct(userId: number, productId: string): Promise<void> {
        Promise.resolve(await this.sql.removeItem(userId, productId))
    }
}