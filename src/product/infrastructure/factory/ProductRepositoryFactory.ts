import MySqlCategoryAccesor from "../../../sql/infrastructure/db/productSql/MySqlCategoryAccesor";
import MySqlProductAccesor from "../../../sql/infrastructure/db/productSql/MySqlProductAccesor";
import DbProductRepository from "../repository/DbProductRepository";
import GetterCategory from "../repository/helpers/GetterCategory";
import GetterImage from "../repository/helpers/GetterImage";
import SqlToProduct from "../repository/helpers/SqlToProduct";

export default class ProductRepositoryFactory {
    public static create(): DbProductRepository {
        const mySqlProductAccesor = new MySqlProductAccesor();
        const mySqlCategoryAccesor = new MySqlCategoryAccesor();
        
        const getterCategory = new GetterCategory(mySqlCategoryAccesor);
        const getterImage = new GetterImage();

        const sqlToProduct = new SqlToProduct(getterCategory, getterImage);
        return new DbProductRepository(mySqlProductAccesor, sqlToProduct);
    }
}