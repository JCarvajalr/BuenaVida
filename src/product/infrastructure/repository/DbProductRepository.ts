
import MySqlProductAccesorInterface from "../../../sql/domain/repository/MySqlProductAccesorInterface";
import DbProductRepositoryPort from "../../domain/port/driven/DbProductRepositoryPort";
import NullProduct from "../../domain/product/NullProduct";
import Product from "../../domain/product/Product";
import SqlToProduct from "./helpers/SqlToProduct";

export default class DbProductRepository implements DbProductRepositoryPort {
    constructor(
        private readonly sql: MySqlProductAccesorInterface,
        private readonly sqlToProduct: SqlToProduct,
    ) {}
    
    public async findAll(): Promise<Product[]> {
        const sqlProducts = await this.sql.fetchAllProducts();
        if (!sqlProducts) {
            return [];
        }
        const products = await this.sqlToProduct.getArray(sqlProducts);
        return Promise.resolve(products);
    }

    public async findById(id: string): Promise<Product> {
        const sqlProduct = await this.sql.fetchById(id);
        if (!sqlProduct) {
            return new NullProduct();
        }
        const product = this.sqlToProduct.get(sqlProduct);
        return Promise.resolve(product);
    }
    
    public save = (item: Product): Promise<Product> => Promise.resolve(new NullProduct());

    public update = (id: string, item: Product): Promise<boolean | Product> => Promise.resolve(false)
    
    public patch = (id: string, item: Partial<Product>): Promise<boolean | Product> => Promise.resolve(new NullProduct())
    
    public delete = (_id: string): Promise<boolean> => Promise.resolve(Promise.resolve(false))

}