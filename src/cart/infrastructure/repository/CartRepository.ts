import Cart from "../../domain/Cart";
import NullCart from "../../domain/NullCart";
import CartRepositoryPort from "../../domain/port/driven/CartRepositoryPort";

export default class CartRepository implements CartRepositoryPort {
    constructor() {}
    
    public findAll(): Promise<Cart[]> {
        throw new Error("Method not implemented.");
    }

    public findById(id: string): Promise<Cart> {
        return Promise.resolve(new NullCart());
    }
    
    public save = (item: Cart): Promise<Cart> => Promise.resolve(new NullCart());

    public update = (id: string, item: Cart): Promise<boolean | Cart> => Promise.resolve(false)
    
    public patch = (id: string, item: Partial<Cart>): Promise<boolean | Cart> => Promise.resolve(new NullCart())
    
    public delete = (_id: string): Promise<boolean> => Promise.resolve(Promise.resolve(false))
}