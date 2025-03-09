import abstractFavorite, { FavoriteInterface } from "./AbstractFavorite";

export default class Favorite extends abstractFavorite {
    constructor(favoriteInterface: FavoriteInterface){
        super(favoriteInterface);
    }

    public isNull = (): boolean => false;
}