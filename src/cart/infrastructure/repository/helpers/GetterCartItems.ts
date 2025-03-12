import SqlToProduct from "../../../../product/infrastructure/repository/helpers/SqlToProduct";
import MySqlCartItemInterface from "../../../../sql/domain/cart/MySqlCartItemInterface";
import CartItem from "../../../domain/itemCart/CartItem";

export default class GetterCartItems {
    constructor(private readonly sqlToProduct: SqlToProduct) {}

    public async get(sqlCart: MySqlCartItemInterface[]): Promise<CartItem[]> {
        const cartItems = Promise.all( await sqlCart.map(async (sqlCartItem) => {
            return new CartItem({
                product: await this.sqlToProduct.get({
                    idProduct: sqlCartItem.productId,
                    name: sqlCartItem.name,
                    description: sqlCartItem.description,
                    price: sqlCartItem.price,
                    Category_idCategory: sqlCartItem.categoryId,
                    image: sqlCartItem.image,
                }),
                quantity: sqlCartItem.quantity,
                subTotal: (sqlCartItem.quantity * sqlCartItem.price),
            })
        }))

        return Promise.resolve(cartItems);
    }
}