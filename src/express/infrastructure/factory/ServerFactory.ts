import { Router } from "express";
import RouterExpressInterface from "../../domain/RouterExpressInterface";
import Server from "../server/Server"

export default class ServerFactory {
    public static create(routes: RouterExpressInterface[]): Server {
        // const errorController = new ErrorExpressController()
        // const errorRouter = new ErrorExpressRouter(errorController)
        return new Server(routes);
    }
}