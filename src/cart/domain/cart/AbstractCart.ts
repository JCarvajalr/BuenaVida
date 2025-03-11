import AbstractProduct from "../../../product/domain/product/AbstractProduct";
import AbstractCartItem from "../itemCart/AbstractCartItem";

export default abstract class AbstractCart {
    protected id: number;
    protected products: AbstractCartItem[];

    constructor (cartInterface: CartInterface){
        this.id = cartInterface.id;
        this.products = cartInterface.products;
    }
    public abstract isNull(): boolean;

    public getId = (): number => this.id;

    public getProducts = (): AbstractCartItem[] => this.products;

}

interface CartInterface {
    id: number;
    products: AbstractCartItem[];
} export { CartInterface }