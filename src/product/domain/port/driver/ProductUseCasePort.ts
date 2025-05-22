import Product from "../../product/Product";

export default interface ProductUseCasePort {
    getProducts(): Promise<Product[]>;
    getById(productId: string): Promise<Product>;
    getByName(search: string): Promise<Product[]>;
    getByPage(page: number): Promise<Product[]>
    getPageCount(): Promise<number>
    getByPrice(min: number, max: number): Promise<Product[]>;
    getByCategory(categoryId: number): Promise<Product[]>;
}