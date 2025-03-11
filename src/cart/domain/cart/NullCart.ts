import AbstractCart, { CartInterface } from "./AbstractCart";

export default class NullCart extends AbstractCart {
    constructor() {
        super({
            id: 0,
            total: 0,
            lastUpdate: new Date(0),
            products: new Map(),
        });
    }

    public isNull = (): boolean => true;
}