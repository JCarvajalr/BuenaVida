import RepositoryInterface from "../../../../repository/RepositoryInterface";
import Product from "../../product/Product";

export default interface DbProductRepositoryPort {
    getAllProducts(): Promise<Product[]>;
    getById(proudctId: string): Promise<Product>;
    getByName(search: string): Promise<Product[]>;
    getByPrice(min: number, max: number): Promise<Product[]>;
    getByCategory(categoryId: number): Promise<Product[]>;
}