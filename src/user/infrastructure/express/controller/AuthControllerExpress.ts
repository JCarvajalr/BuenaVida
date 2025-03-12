import { Request, Response } from "express";
import AuthControllerExpressInterface from "../../../domain/interfaces/AuthControllerExpressInterface";
import AuthUseCasePort from "../../../domain/port/driver/usecase/AuthUseCase";

export default class AuthControllerExpress implements AuthControllerExpressInterface {
    constructor(private readonly authUseCasePort: AuthUseCasePort) {}

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const { user, token } = await this.authUseCasePort.login(email, password);

            res.cookie('token', token);
            res.status(200).header('auth-token', token).json(user);
        } catch (error) {
            res.status(404).json({ error: 'Server failed' });
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const newUser = await this.authUseCasePort.register(req.body);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(404).json({ error: 'Registration failed' });
        }
    }
}