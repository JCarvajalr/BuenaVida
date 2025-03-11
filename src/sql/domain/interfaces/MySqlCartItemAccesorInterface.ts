import MySqlCartItemInterface from "../cart/MySqlCartItemInterface";

export default interface MySqlCartItemAccesorInterface {
    fetchCartItems(id: number): Promise<MySqlCartItemInterface[]>
}