import { ProductInterface } from "../../../product/domain/product/AbstractProduct";

export default interface FullCartInterface {
    id: number;
    total: number;
    lastUpdate: Date;
    products: Map<string, { product: ProductInterface; amount: number }>;
}