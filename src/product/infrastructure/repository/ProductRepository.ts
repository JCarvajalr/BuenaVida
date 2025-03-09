import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
import NullProduct from "../../domain/product/NullProduct";
import Product from "../../domain/product/Product";

export default class productRepository implements ProductRepositoryPort {
    constructor() {}
    
    public findAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }

    public findById(id: string): Promise<Product> {
        return Promise.resolve(new NullProduct());
    }
    
    public save = (item: Product): Promise<Product> => Promise.resolve(new NullProduct());

    public update = (id: string, item: Product): Promise<boolean | Product> => Promise.resolve(false)
    
    public patch = (id: string, item: Partial<Product>): Promise<boolean | Product> => Promise.resolve(new NullProduct())
    
    public delete = (_id: string): Promise<boolean> => Promise.resolve(Promise.resolve(false))

}