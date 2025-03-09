import RepositoryInterface from "../../../../repository/RepositoryInterface";
import Product from "../../product/Product";

export default interface DbProductRepositoryPort extends RepositoryInterface<string, Product> {
    
}