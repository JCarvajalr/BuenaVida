import { Request, Response } from 'express'
import ProductUseCasePort from "../../../domain/port/driver/ProductUseCasePort";
import ProductControllerExpressInterface from "../../../domain/interfaces/ProductControllerExpressInterface"
import ProductsToJson from './ProductsToJson';

export default class ProductControllerExpress implements ProductControllerExpressInterface {
  constructor(private readonly productUseCase: ProductUseCasePort) {}
  
  async getProducts(_req: Request, res: Response): Promise<void> {
    const products = await this.productUseCase.getProducts();
    const jsonProducts = ProductsToJson.get(products);
    if (jsonProducts.length === 0){
      res.status(404).send("Products not found");
    } else {
      res.status(200).json(jsonProducts);
    }
  }

}
