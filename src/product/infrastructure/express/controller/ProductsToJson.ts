import FullProductInterface from "../../../domain/api/FullProductInterface";
import Product from "../../../domain/product/Product";

export default class ProductsToJson {
    public static get(products: Product[]): FullProductInterface[] {
        const jsonProducts = products.map((product) => {
            return this.getOne(product);
        })
        return jsonProducts;
    }

    public static getOne(product: Product): FullProductInterface {
        const jsonProduct = {
            id: product.getId(),
            name: product.getName(),
            description: product.getDescription(),
            price: product.getPrice(),
            image: {
                name: product.getImage().getName(),
                path: product.getImage().getPath(),
            },
            category: {
                id: product.getCategory().getId(),
                name: product.getCategory().getName(),
                description: product.getCategory().getDescription(),
            }
        }
        return jsonProduct;
    }
}