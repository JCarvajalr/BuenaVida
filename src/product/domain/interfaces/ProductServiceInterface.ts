import Product from "../product/Product";

export default interface ProductServiceInterface {
    retrieveProducts(): Promise<Product[]>;
}