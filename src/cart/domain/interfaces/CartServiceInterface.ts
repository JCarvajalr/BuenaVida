import Cart from "../Cart";

export default interface CartServiceInterface {
    retrieveCart(): Promise<Cart>;
}