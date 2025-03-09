import ProductServiceInterface from "../../domain/interfaces/ProductServiceInterface";
import ProductRepositoryPort from "../../domain/port/driven/DbProductRepositoryPort";
import Product from "../../domain/product/Product";

export default class ProductService implements ProductServiceInterface {
    constructor(private readonly productRepository: ProductRepositoryPort) {}
    
    retrieveProducts(): Promise<Product[]> {
        return this.productRepository.findAll();
    }
}