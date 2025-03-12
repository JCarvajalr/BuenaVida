import AbstractCart, { CartInterface } from "./AbstractCart";

export default class NullCart extends AbstractCart {
    constructor() {
        super({
            id: 0,
            total: 0,
            products: [],
        });
    }

    public isNull = (): boolean => true;
}