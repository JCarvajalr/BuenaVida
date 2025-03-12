import CartRouterExpressFactory from "./cart/infrastructure/factory/CartRouterExpressFactory";
import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import FavoriteRouterFactory from "./favorites/infrastructure/factory/FavoriteRouterFactory";
import ProductRouterFactory from "./product/infrastructure/factory/ProductRouterFactory";
import UserRouterFactory from "./user/infrastructure/factory/UserRouterFactory";

const productRouter = ProductRouterFactory.create();
const cartRouter = CartRouterExpressFactory.create();
// const userRouter = UserRouterFactory.create();
const favoriteRouter = FavoriteRouterFactory.create();
const routers = [productRouter, cartRouter, favoriteRouter];

const server = ServerFactory.create(routers);
server.start();