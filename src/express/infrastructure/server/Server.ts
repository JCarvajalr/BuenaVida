import express, { Application } from 'express'
import RouterExpressInterface from '../../domain/RouterExpressInterface';
import ExpressProvider from '../provider/ExpressProvider';
import cors from 'cors'

export default class Server {
    private readonly app: Application

    constructor (
        private readonly routesExpress: RouterExpressInterface[],
    ) {
        this.app = express();
        this.configure();
        this.middlewares();
        this.routes();
    }

    public routes() {
        this.routesExpress.forEach((route) => {
            this.app.use(route.path, route.router)
        })
        //this.app.use(this.error.path, this.error.router)
    }

    public configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private middlewares(): void {
        this.app.use(cors({
            origin: 'http://127.0.0.1:5501',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type'],
            credentials: true
        }));
        this.app.options('*', cors()); 
    }

    public start() {
        const HOST = ExpressProvider.getHost();
        const PORT = ExpressProvider.getPort();
        const PROTOCOL = ExpressProvider.getProtocol();
        this.app.listen(PORT, () =>
            console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
        );
    }
}