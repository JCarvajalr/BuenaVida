
export default interface MySqlProductInterface {
    idProduct: string;
    name: string;
    description: string;
    price: number;
    state: boolean;
    stock: number;
    Category_idCategory: number;
    image: string;
}