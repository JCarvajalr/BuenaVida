
export default class ExpressProvider {
    private static instace: ExpressProvider;
    private static HOST: string;
    private static PORT: string;
    private static PROTOCOL: string;

    private constructor() {
        ExpressProvider.HOST = process.env['HOST'] ?? 'localhost';
        ExpressProvider.PORT = process.env['PORT'] ?? '3000';
        ExpressProvider.PROTOCOL = process.env['PROTOCOL'] ?? 'http';
    }

    public static getInstance(): ExpressProvider {
        if (ExpressProvider.instace === null || ExpressProvider.instace === undefined){
            ExpressProvider.instace = new ExpressProvider();
        }
        return ExpressProvider.instace;
    }

    public static getHost(): string {
        ExpressProvider.getInstance();
        return ExpressProvider.HOST;
    }

    public static getPort(): string {
        ExpressProvider.getInstance();
        return ExpressProvider.PORT;
    }

    public static getProtocol(): string {
        ExpressProvider.getInstance();
        return ExpressProvider.PROTOCOL;
    }

    public static getAPIDomain(): string {
        ExpressProvider.getInstance();
        return `${ExpressProvider.PROTOCOL}://${ExpressProvider.HOST}:${ExpressProvider.PORT}`;
    }
}