import MySqlCategoryAccesorInterface from "../../../../mysql/domain/repository/MySqlCategoryAccesorInterface";
import AbstractCategory from "../../../domain/category/AbstractCategory";
import Category from "../../../domain/category/Category";
import NullCategory from "../../../domain/category/NullCategory";

export default class GetterCategory {
    constructor(private readonly sql: MySqlCategoryAccesorInterface) {}

    public async get(id: number): Promise<Category> {
        const sqlCategory = await this.sql.fetchById(id);
        if (id === 0) {
            return new NullCategory();
        }
        const category = new Category({
            id: sqlCategory.idCategory,
            name: sqlCategory.name,
            description: sqlCategory.description,
        });
        return Promise.resolve(category);
    }

}