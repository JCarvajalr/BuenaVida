import AbstractProduct from "../../../product/domain/product/AbstractProduct";
import AbstractCartItem from "../itemCart/AbstractCartItem";

export default abstract class AbstractCart {
    protected id: number;
    protected total: number;
    protected products: AbstractCartItem[];

    constructor (cartInterface: CartInterface){
        this.id = cartInterface.id;
        this.total = cartInterface.total;
        this.products = cartInterface.products;
    }
    public abstract isNull(): boolean;

    public getId = (): number => this.id;

    public getTotal = (): number => this.total;

    public getProducts = (): AbstractCartItem[] => this.products;

    public setTotal(total: number) {
        this.total = total;
    }
}

interface CartInterface {
    id: number;
    total: number;
    products: AbstractCartItem[];
} export { CartInterface }