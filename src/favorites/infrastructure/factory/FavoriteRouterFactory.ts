import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";
import FavoriteService from "../../application/service/FavoriteService";
import FavoriteUseCase from "../../application/usecase/FavoriteUseCase";
import FavoriteControllerExpress from "../express/controller/FavoriteControllerExpress";
import FavoriteRouterExpress from "../express/router/FavoriteRouterExpress";
import FavoriteRepositoryFactory from "./FavoriteRepositoryFactory";

export default class FavoriteRouterFactory {
    public static create(): RouterExpressInterface {
        const favoriteService = new FavoriteService(FavoriteRepositoryFactory.create());
        const favoriteUseCase = new FavoriteUseCase(favoriteService);
        const favoriteController = new FavoriteControllerExpress(favoriteUseCase);

        return new FavoriteRouterExpress(favoriteController);
    }
}