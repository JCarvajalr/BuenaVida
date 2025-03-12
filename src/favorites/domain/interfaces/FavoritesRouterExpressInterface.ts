import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface FavoritesRouterExpressInterface extends RouterExpressInterface {
    getFavorites(): void;
    findProduct(): void;
    addFavorite(): void;
    removeFavorite(): void;
}