export default abstract class AbstractUser {
    protected id: number;
    protected email: string;
    protected name: string;
    protected surname: string;
    protected password: string;
    protected role: Role;

    constructor(userInterface: UserInterface) {
        this.id = userInterface.id;
        this.email = userInterface.email;
        this.name = userInterface.names;
        this.surname = userInterface.surnames;
        this.password = userInterface.password;
        this.role = userInterface.role;
    }

    public abstract isNull(): boolean;

    public getId = (): number => this.id;

    public getEmail = (): string => this.email;

    public getName = (): string => this.name;

    public getSurname = (): string => this.surname;

    public getPassword = (): string => this.password;

    public getRole = (): Role => this.role;
}

interface UserInterface {
    id: number;
    email: string;
    names: string;
    surnames: string;
    password: string;
    role: Role;
}
type Role = 'ADMIN' | 'USER';

export { UserInterface, Role }