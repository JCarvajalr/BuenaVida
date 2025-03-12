import GetterCategory from "../../../product/infrastructure/repository/helpers/GetterCategory";
import GetterImage from "../../../product/infrastructure/repository/helpers/GetterImage";
import SqlToProduct from "../../../product/infrastructure/repository/helpers/SqlToProduct";
import MySqlCartAccesor from "../../../sql/infrastructure/database/cartSql/MySqlCartAccesor";
import MySqlCategoryAccesor from "../../../sql/infrastructure/database/productSql/MySqlCategoryAccesor";
import DbCartRepository from "../repository/DbCartRepository";
import GetterCartItems from "../repository/helpers/GetterCartItems";
import SqlToCart from "../repository/helpers/SqlToCart";

export default class CartDbRepositoryFactory {
    public static create(): DbCartRepository {
        const mySqlCartAccesor = new MySqlCartAccesor();
        const mySqlCategoryAccesor = new MySqlCategoryAccesor();

        const getterImage = new GetterImage();
        const getterCategory = new GetterCategory(mySqlCategoryAccesor);

        const sqlToProduct = new SqlToProduct(getterCategory, getterImage);
        const getterCartItems = new GetterCartItems(sqlToProduct);

        const sqlToCart = new SqlToCart(getterCartItems);

        return new DbCartRepository(mySqlCartAccesor, sqlToCart);
    }
}