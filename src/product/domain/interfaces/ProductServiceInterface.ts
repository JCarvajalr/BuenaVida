import Product from "../product/Product";

export default interface ProductServiceInterface {
    retrieveProducts(): Promise<Product[]>;
    retriveProductById(productId: string): Promise<Product>;
    retrieveProductsByName(search: string): Promise<Product[]>;
    getByPrice(min: number, max: number): Promise<Product[]>;
    getByCategory(categoryId: number): Promise<Product[]>;
}