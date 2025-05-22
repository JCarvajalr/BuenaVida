import ProductServiceInterface from "../../domain/interfaces/ProductServiceInterface";
import ProductRepositoryPort from "../../domain/port/driven/DbProductRepositoryPort";
import Product from "../../domain/product/Product";

export default class ProductService implements ProductServiceInterface {
    constructor(private readonly productRepository: ProductRepositoryPort) {}

    public retrieveProducts(): Promise<Product[]> {
        return this.productRepository.getAllProducts();
    }

    public retriveProductById(productId: string): Promise<Product> {
        return this.productRepository.getById(productId);
    }

    public async retrieveProductsByName(search: string): Promise<Product[]> {
        return this.productRepository.getByName(search);
    }

    public retrieveProductsByPage(page: number): Promise<Product[]> {
        return this.productRepository.getByPage(page);
    }

    public getPageCount(): Promise<number> {
        return this.productRepository.getPageCount();
    }
    
    public getByPrice(min: number, max: number): Promise<Product[]> {
        return this.productRepository.getByPrice(min, max);
    }
    public getByCategory(categoryId: number): Promise<Product[]> {
        return this.productRepository.getByCategory(categoryId);
    }
}
