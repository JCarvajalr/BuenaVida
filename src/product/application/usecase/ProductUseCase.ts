import ProductServiceInterface from "../../domain/interfaces/ProductServiceInterface";
import ProductUseCasePort from "../../domain/port/driver/ProductUseCasePort";
import NullProduct from "../../domain/product/NullProduct";
import Product from "../../domain/product/Product";

export default class ProductUseCase implements ProductUseCasePort {
    constructor(private readonly productService: ProductServiceInterface) {}
    
    public async getProducts(): Promise<Product[]> {
        let products = await this.productService.retrieveProducts();
        if (products.length === 0){
            products = [new NullProduct()];
        }
        return products;
    }

}