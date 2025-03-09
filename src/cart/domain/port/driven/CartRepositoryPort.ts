import RepositoryInterface from "../../../../repository/RepositoryInterface";
import Cart from "../../Cart";

export default interface CartRepositoryPort 
extends RepositoryInterface<string, Cart>{}