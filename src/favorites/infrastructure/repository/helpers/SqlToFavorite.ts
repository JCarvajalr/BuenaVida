import MySqlFavoriteInterface from "../../../../sql/domain/favorite/MySqlFavoriteInterface";
import Favorite from "../../../domain/Favorite";

export default class SqlToFavorite {
    public get(sqlFavorites: MySqlFavoriteInterface[]): Favorite {
        const productsId = sqlFavorites.map((sqlFavorite) => {
            return sqlFavorite.Product_idProduct;
        })
        const favorite = new Favorite({
            productsId: productsId,
        });
        return favorite;
    }
}