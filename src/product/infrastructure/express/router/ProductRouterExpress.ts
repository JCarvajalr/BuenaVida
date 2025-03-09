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
        this.router.get("/products", this.productController.getProducts.bind(this.productController));
    }
}