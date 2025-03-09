import MySqlProductInterface from "../../../../mysql/domain/product/MySqlProductInterface";
import Product from "../../../domain/product/Product";
import GetterCategory from "./GetterCategory";
import GetterImage from "./GetterImage";

export default class SqlToProduct {
    constructor(
        private readonly getterCategory: GetterCategory,
        private readonly getterImage: GetterImage
    ) {}

    public get(mySqlProducts: MySqlProductInterface): Promise<Product>{
        return Promise.resolve(this.toProduct(mySqlProducts));
    }

    public getArray(mySqlProducts: MySqlProductInterface[]): Promise<Product[]> {
        const products = mySqlProducts.map(async (sqlProduct) => 
            this.toProduct(sqlProduct)
        );
        return Promise.all(products);
    }

    private async toProduct(mySqlProduct: MySqlProductInterface): Promise<Product> {
        const product = new Product({
            id: mySqlProduct.idProduct,
            name: mySqlProduct.name,
            description: mySqlProduct.description,
            price: mySqlProduct.price,
            state: mySqlProduct.state,
            stock: mySqlProduct.stock,
            image: this.getterImage.get(mySqlProduct),
            category: await this.getterCategory.get(mySqlProduct.Category_idCategory),
        });
        return Promise.resolve(product);
    }
}