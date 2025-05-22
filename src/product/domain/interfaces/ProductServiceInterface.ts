import Product from "../product/Product";

export default interface ProductServiceInterface {
    retrieveProducts(): Promise<Product[]>;
    retriveProductById(productId: string): Promise<Product>;
    retrieveProductsByName(search: string): Promise<Product[]>;
    retrieveProductsByPage(page: number): Promise<Product[]>;
    getPageCount(): Promise<number>;
    getByPrice(min: number, max: number): Promise<Product[]>;
    getByCategory(categoryId: number): Promise<Product[]>;
}