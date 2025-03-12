import ProductServiceInterface from "../../domain/interfaces/ProductServiceInterface";
import ProductUseCasePort from "../../domain/port/driver/ProductUseCasePort";
import NullProduct from "../../domain/product/NullProduct";
import Product from "../../domain/product/Product";

export default class ProductUseCase implements ProductUseCasePort {
    constructor(private readonly productService: ProductServiceInterface) {}
    
    public getProducts(): Promise<Product[]> {
        return Promise.resolve(this.productService.retrieveProducts());
    }

    public getById(productId: string): Promise<Product> {
        return Promise.resolve(this.productService.retriveProductById(productId));
    }

    public getByName(search: string): Promise<Product[]> {
        //Minimum search, 4 characters
        if (search.length > 3) {
            return Promise.resolve(this.productService.retrieveProductsByName(search));
        } else {
            return Promise.resolve([]);
        }
    }
    
    public getByPrice(min: number, max: number): Promise<Product[]> {
        return Promise.resolve(this.productService.getByPrice(min, max));
    }
    
    public getByCategory(categoryId: number): Promise<Product[]> {
        return Promise.resolve(this.productService.getByCategory(categoryId));
    }
}