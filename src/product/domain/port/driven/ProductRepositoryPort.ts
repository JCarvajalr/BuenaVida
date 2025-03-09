import RepositoryInterface from "../../../../repository/RepositoryInterface";
import Product from "../../product/Product";

export default interface ProductRepositoryPort
 extends RepositoryInterface<string, Product> {}