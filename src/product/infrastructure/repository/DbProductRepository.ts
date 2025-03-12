import MySqlProductAccesorInterface from "../../../sql/domain/interfaces/MySqlProductAccesorInterface";
import DbProductRepositoryPort from "../../domain/port/driven/DbProductRepositoryPort";
import NullProduct from "../../domain/product/NullProduct";
import Product from "../../domain/product/Product";
import SqlToProduct from "./helpers/SqlToProduct";

/**
 * Adapter database-productDomain
 */
export default class DbProductRepository implements DbProductRepositoryPort {
    constructor(
        private readonly sql: MySqlProductAccesorInterface,
        private readonly sqlToProduct: SqlToProduct,
    ) {}
    
    public async getAllProducts(): Promise<Product[]> {
        const sqlProducts = await this.sql.fetchAllProducts();
        if (!sqlProducts) {
            return [];
        }
        const products = await this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }
    
    public async getById(proudctId: string): Promise<Product> {
        const sqlProduct = await this.sql.fetchById(proudctId);
        if (!sqlProduct) {
            return new NullProduct();
        }
        const product = this.sqlToProduct.get(sqlProduct);
        return Promise.resolve(product);
    }

    public async getByName(search: string): Promise<Product[]> {
        const sqlProducts = await this.sql.fetchByName(search);
        if (!sqlProducts) {
            return [];
        }
        const products = this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }

    public async getByPage(page: number): Promise<Product[]> {
        const sqlProducts = await this.sql.getByPage(page);
        if (!sqlProducts) {
            return [];
        }
        const products = this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }

    public async getByPrice(min: number, max: number): Promise<Product[]> {
        const sqlProducts = await this.sql.getByPrice(min, max);
        if (!sqlProducts) {
            return [];
        }
        const products = this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }

    public async getByCategory(categoryId: number): Promise<Product[]> {
        const sqlProducts = await this.sql.getByCategory(categoryId);
        if (!sqlProducts) {
            return [];
        }
        const products = this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }
}