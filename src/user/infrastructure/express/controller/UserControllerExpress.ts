import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../domain/interfaces/UserControllerExpresssInterface";
import UserUseCasePort from "../../../domain/port/driver/usecase/UserUseCasePort";

export default class UserControllerExpress implements UserControllerExpressInterface {
    constructor(private readonly userUseCasePort: UserUseCasePort) {}

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const newUser = await this.userUseCasePort.createUser(req.body);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
        res.status(200).json({ message: 'User created successfully' });
    }
    
    public async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userUseCasePort.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    
    public async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await this.userUseCasePort.getUserById(String(id));
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    
    public async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedUser = await this.userUseCasePort.updateUser(String(id), req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    
    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await this.userUseCasePort.deleteUser(String(id));
            if (deleted) {
                res.status(200).json('User deleted successfully');
            }
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
}