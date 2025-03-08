import Product from "../product/Product";


export default interface ServiceInterface {
    retrieveProducts(): Promise<Product[]>;
}