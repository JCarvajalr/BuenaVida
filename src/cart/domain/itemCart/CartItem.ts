import AbstractCartItem, { CartItemInterface } from "./AbstractCartItem";


export default class CartItem extends AbstractCartItem{
    constructor(itemCart: CartItemInterface){
        super(itemCart);
    }

    public isNull = (): boolean => false;
}