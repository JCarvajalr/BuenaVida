import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface CartRouterExpressInterface extends RouterExpressInterface {
    /**
     * Routes to implement:
     * 
     * getCart => (body: userId)
     * getCartResume => (body: userId)
     * addItem => (body: userId, productId, quantity)
     * removeItem => (body: userId, productId)
     * emptyCart => (body: userId)
     * increaseQuantity => (body: userId, productId, quantity)
     * decreaseQuantity => (body: userId, productId, quantity)
     * payCart
     */

}