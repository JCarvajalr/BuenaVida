import { Router } from 'express'
import ProductRouterExpressInterface from "../../../domain/interfaces/ProductRouterExpressInterface";
import ProductControllerExpressInterface from '../../../domain/interfaces/ProductControllerExpressInterface';

export default class ProductRouterExpress implements ProductRouterExpressInterface {
    router: Router;
    path: string;
    
    constructor(private readonly productController: ProductControllerExpressInterface) {
        this.router = Router();
        this.path = "/product";
        this.routes();
    }

    public routes(): void {
        this.getProducts();
    }

    public getProducts(): void {
        // getProducts
        this.router.get("/getall", this.productController.getProducts.bind(this.productController));
        // getById (query: id)
        this.router.get("/getby-id", this.productController.getById.bind(this.productController));
        // getByName (query: search)
        this.router.get("/search", this.productController.getByName.bind(this.productController));
        // getByPrice (query: min, max)
        this.router.get("/price", this.productController.getByPrice.bind(this.productController));
        // getByCategory (query: categoryId)
        this.router.get("/category", this.productController.getByCategory.bind(this.productController));
    }
}