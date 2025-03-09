import AbstractCategory from "../category/AbstractCategory";
import AbstractImage from "../image/AbstractImage";

export default abstract class AbstractProduct {
    protected id: string;
    protected name: string;
    protected description: string;
    protected price: number;
    protected state: boolean;
    protected stock: number;
    protected image: AbstractImage;
    protected category: AbstractCategory;

    constructor (productInterface: ProductInterface){
        this.id = productInterface.id;
        this.name = productInterface.name;
        this.description = productInterface.description;
        this.price = productInterface.price;
        this.state = productInterface.state;
        this.stock = productInterface.stock;
        this.image = productInterface.image;
        this.category = productInterface.category;
    }
    public abstract isNull(): boolean;
    //Getters
    public getId = (): string => this.id;

    public getName = (): string => this.name;
    
    public getDescription = (): string => this.description;
    
    public getPrice = (): number => this.price;
    
    public getState = (): boolean => this.state;
    
    public getStock = (): number => this.stock;
    
    public getImage = (): AbstractImage => this.image;

    public getCategory = (): AbstractCategory => this.category;
}

interface ProductInterface {
    id: string;
    name: string;
    description: string;
    price: number;
    state: boolean;
    stock: number;
    image: AbstractImage;
    category: AbstractCategory;
    // ??
    // pricePerUnit: number;
    // unit: number;
} export { ProductInterface }