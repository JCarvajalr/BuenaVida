import abstractFavorite from "./AbstractFavorite";

export default class NullFavorite extends abstractFavorite {
    constructor() {
        super({
            productsId: [],
        });
    }

    public isNull = (): boolean => true;
}