import AbstractProduct from "../../product/domain/product/AbstractProduct";

export default abstract class AbstractCart {
    protected id: number;
    protected total: number;
    protected lastUpdate: Date;
    protected products: Map<string, { product: AbstractProduct; quantity: number }>;

    constructor (cartInterface: CartInterface){
        this.id = cartInterface.id;
        this.total = cartInterface.total;
        this.lastUpdate = cartInterface.lastUpdate;
        this.products = cartInterface.products;
    }
    public abstract isNull(): boolean;

    public getId = (): number => this.id;

    public getTotal = (): number => this.total;

    public getLastUpdate = (): Date => this.lastUpdate;

    public getProducts = (): Map<string, { product: AbstractProduct; quantity: number }> => this.products;
}

interface CartInterface {
    id: number;
    total: number;
    lastUpdate: Date;
    products: Map<string, { product: AbstractProduct; quantity: number }>;
} export { CartInterface }