import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import ProductRouterFactory from "./product/infrastructure/factory/ProductRouterFactory";

const productRouter = ProductRouterFactory.create();
const routers = [productRouter];

const server = ServerFactory.create(routers);
server.start();