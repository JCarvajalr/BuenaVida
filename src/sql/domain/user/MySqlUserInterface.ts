import UserRepositoryPort from "../../../user/domain/port/driven/UserRepostoryPort";

export default interface MySqlUserInterface extends UserRepositoryPort {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    state: boolean;
    role: number;
}