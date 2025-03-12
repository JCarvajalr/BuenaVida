import { Router } from 'express';
import UserRouterExpressInterface from '../../../domain/interfaces/UserRouterExpressInterface';
import AuthControllerExpressInterface from '../../../domain/interfaces/AuthControllerExpressInterface';
import UserControllerExpressInterface from '../../../domain/interfaces/UserControllerExpresssInterface';

export default class UserRouterExpress implements UserRouterExpressInterface {
  public router: Router;
  public path: string;

  constructor(
    private readonly controllerUser: UserControllerExpressInterface, 
    private readonly controllerAuth : AuthControllerExpressInterface) {
      this.router = Router();
      this.path = '/user';
      this.routes();
  }

  public routes(): void {
    this.getAuthRoutes();
    this.getUserRoutes();
  }

  public getAuthRoutes(): void {
    this.router.post('/login', this.controllerAuth.login.bind(this.controllerAuth));
    this.router.post('/register', this.controllerAuth.register.bind(this.controllerAuth));
  }

  public getUserRoutes(): void {
    this.router.post('/create', this.controllerUser.create.bind(this.controllerUser)); 
    this.router.get('/get', this.controllerUser.getAll.bind(this.controllerUser));
    this.router.get('/get/:id', this.controllerUser.getById.bind(this.controllerUser));
    this.router.put('/update/:id', this.controllerUser.update.bind(this.controllerUser));
    this.router.delete('/remove/:id', this.controllerUser.delete.bind(this.controllerUser));
  }
}
