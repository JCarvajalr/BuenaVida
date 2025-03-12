import { Request, Response } from 'express'
import ProductUseCasePort from "../../../domain/port/driver/ProductUseCasePort";
import ProductControllerExpressInterface from "../../../domain/interfaces/ProductControllerExpressInterface"
import ProductsToJson from './ProductsToJson';

export default class ProductControllerExpress implements ProductControllerExpressInterface {
  constructor(private readonly productUseCase: ProductUseCasePort) {}
  
  public async getProducts(_req: Request, res: Response): Promise<void> {
    const products = await this.productUseCase.getProducts();
    const jsonProducts = ProductsToJson.get(products);
    if (jsonProducts.length === 0){
      res.status(404).send("Products not found");
    } else {
      res.status(200).json(jsonProducts);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.query;
    const products = await this.productUseCase.getById(String(id));
    if (products.isNull()) {
      res.status(404).send("Product not found");
    } else {
      const jsonProducts = ProductsToJson.getOne(products);
      res.status(200).json(jsonProducts);
    }
  }

  public async getByName(req: Request, res: Response): Promise<void> {
    const { search } = req.query;
    const products = await this.productUseCase.getByName(String(search));
    if (!products) {
      res.status(404).send("Products not found");
    } else {
      const jsonProducts = ProductsToJson.get(products);
      res.status(200).json(jsonProducts);
    }
  }

  public async getByPage(req: Request, res: Response): Promise<void> {
      const { page } = req.query;
      const products = await this.productUseCase.getByPage(Number(page));
      const jsonProducts = ProductsToJson.get(products);
      res.status(200).json(jsonProducts);
  }

  public async getByPrice(req: Request, res: Response): Promise<void> {
    const { min, max } = req.query;
    const products = await this.productUseCase.getByPrice(Number(min), Number(max));
    const jsonProducts = ProductsToJson.get(products);
    res.status(200).json(jsonProducts);
  }
  
  public async getByCategory(req: Request, res: Response): Promise<void> {
    const { categoryId } = req.query;
    const products = await this.productUseCase.getByCategory(Number(categoryId));
    const jsonProducts = ProductsToJson.get(products);
    res.status(200).json(jsonProducts);
  }
}