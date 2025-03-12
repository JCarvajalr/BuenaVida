import MySqlFavoriteAccesor from "../../../sql/infrastructure/database/favoriteSql/MySqlFavoriteAccesor";
import DbFavoritesRepositoryInterface from "../../domain/port/driven/DbFavoritesRepositoryInterface";
import DbFavoritesRepository from "../repository/DbFavoritesRepository";
import SqlToFavorite from "../repository/helpers/SqlToFavorite";

export default class FavoriteRepositoryFactory {
    public static create(): DbFavoritesRepositoryInterface {
        const mySqlFavoriteAccesor = new MySqlFavoriteAccesor();
        const sqlToFavorite = new SqlToFavorite();

        return new DbFavoritesRepository(
            mySqlFavoriteAccesor, 
            sqlToFavorite);
    }
}