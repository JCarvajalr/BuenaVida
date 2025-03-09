import ProductServiceInterface from "../../domain/interfaces/ProductServiceInterface";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
import Product from "../../domain/product/Product";

export default class ProductService implements ProductServiceInterface {
    constructor(private readonly productRepositoy: ProductRepositoryPort) {}
    
    retrieveProducts(): Promise<Product[]> {
        return this.productRepositoy.findAll();
    }
}