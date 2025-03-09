import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";
import ProductService from "../../application/service/ProductService";
import ProductUseCase from "../../application/usecase/ProductUseCase";
import ProductControllerExpress from "../express/controller/ProductControllerExpress";
import ProductRouterExpress from "../express/router/ProductRouterExpress";
import ProductRepositoryFactory from "./ProductRepositoryFactory";

export default class ProductRouterFactory {
    public static create(): RouterExpressInterface {
        const productService = new ProductService(ProductRepositoryFactory.create());
        const productUseCase = new ProductUseCase(productService);
        const productController = new ProductControllerExpress(productUseCase);

        return new ProductRouterExpress(productController);
    }
}