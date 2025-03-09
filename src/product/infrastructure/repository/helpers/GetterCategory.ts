import MySqlCategoryAccesorInterface from "../../../../sql/domain/repository/MySqlCategoryAccesorInterface";
import AbstractCategory from "../../../domain/category/AbstractCategory";
import Category from "../../../domain/category/Category";
import NullCategory from "../../../domain/category/NullCategory";

export default class GetterCategory {
    constructor(private readonly sql: MySqlCategoryAccesorInterface) {}
    
    public async get(id: number): Promise<Category> {
        if (id === 0) {
            return new NullCategory();
        }
        const sqlCategory = await this.sql.fetchById(id);
        const category = new Category({
            id: sqlCategory.idCategory,
            name: sqlCategory.name,
            description: sqlCategory.description,
        });
        return Promise.resolve(category);
    }

}