
export default abstract class abstractFavorite {
    protected productsId: string[];

    constructor(favoriteInterface: FavoriteInterface){
        this.productsId = favoriteInterface.productsId;
    }

    public abstract isNull(): boolean;

    public getProducts = (): string[] => this.productsId;
}

interface FavoriteInterface {
    productsId: string[];
} export { FavoriteInterface }

