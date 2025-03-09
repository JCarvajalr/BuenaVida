
export default abstract class abstractFavorite {
    protected productsId: string[];
    protected userId: number;

    constructor(favoriteInterface: FavoriteInterface){
        this.productsId = favoriteInterface.productsId;
        this.userId = favoriteInterface.userId;
    }

    public abstract isNull(): boolean;

    public getProducts = (): string[] => this.productsId;

    public getUserId = (): number => this.userId;
}

interface FavoriteInterface {
    productsId: string[];
    userId: number;
} export { FavoriteInterface }

