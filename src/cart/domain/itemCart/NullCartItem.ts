import NullProduct from "../../../product/domain/product/NullProduct";
import AbstractCartItem from "./AbstractCartItem";

export default class NullCartItem extends AbstractCartItem {
    constructor(){
        super({
            product: new NullProduct(),
            quantity: 0,
            subTotal: 0,
        })
    }

    public isNull = (): boolean => true;
}