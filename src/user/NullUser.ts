import AbstractUser from "./AbstractUser";

export default class NullUser extends AbstractUser{
    constructor(){
        super({
            id: 0,
            email: "Not found",
            names: "Not found",
            surnames: "Not found",
            password: "Not found",
            role: 'USER',
        });
    }

    public isNull = (): boolean => true;
}