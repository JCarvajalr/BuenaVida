import abstractFavorite from "./AbstractFavorite";

export default class NullFavorite extends abstractFavorite {
    constructor() {
        super({
            productsId: [],
            userId: 0,
        });
    }

    public isNull = (): boolean => true;
}