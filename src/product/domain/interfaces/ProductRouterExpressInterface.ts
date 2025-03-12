import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface ProductRouterExpressInterface extends RouterExpressInterface{
    /**
     * routes:
     * getProducts
     * getById => (query: id)
     * getByName => (query: search)
     * getByPrice => (query: min, max)
     * getByCategory => (query: categoryId)
     */
    getProducts(): void;
}