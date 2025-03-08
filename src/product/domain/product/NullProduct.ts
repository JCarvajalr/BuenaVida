import NullCategory from "../category/NullCategory";
import NullImage from "../image/NullImage";
import AbstractProduct from "./AbstractProduct";

export default class NullProduct extends AbstractProduct {
    constructor(){
        super({
            id: "Not found",
            name: "Not found",
            description: "Not found",
            price: 0,
            state: false,
            stock: 0,
            image: [],
            category: new NullCategory(),
        })
    }
    public isNull = (): boolean => true;
}