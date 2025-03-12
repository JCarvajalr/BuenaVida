import { UserInterface } from "../../domain/AbstractUser";
import User from "../../domain/User";

export default class GetterUser {
    public static get = (json: UserInterface): User => {
        const user = new User({
            id: json.id,
            names: json.names,
            surnames: json.surnames,
            email: json.email,
            password: json.password,
            role: json.role,
        });
        return user;
    }
}