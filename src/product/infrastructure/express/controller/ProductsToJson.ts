import FullProductInterface from "../../../domain/api/FullProductInterface";
import Product from "../../../domain/product/Product";

export default class ProductsToJson {
    public static get(products: Product[]): FullProductInterface[] {
        const jsonProducts = products.map((product) => {
            return {
                id: product.getId(),
                name: product.getName(),
                description: product.getDescription(),
                price: product.getPrice(),
                state: product.getState(),
                stock: product.getStock(),
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
        })
        return jsonProducts;
    }
}