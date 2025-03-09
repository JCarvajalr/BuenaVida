
export default class DatabaseProvider {
    private static instace: DatabaseProvider;
    private static HOST: string;
    private static PORT: string;
    private static USER: string;
    private static PWD: string;
    private static NAME: string;

    private constructor() {
        DatabaseProvider.HOST = process.env['DB_HOST'] ?? 'localhost';
        DatabaseProvider.PORT= process.env['DB_PORT'] ?? '3306';
        DatabaseProvider.PWD = process.env['DB_PWD'] ?? 'admin';
        DatabaseProvider.USER = process.env['DB_USER'] ?? 'root';
        DatabaseProvider.NAME = process.env['DB_NAME'] ?? 'buenavidadb';   
    }
    
    public static getInstance(): DatabaseProvider {
        if (!DatabaseProvider.instace) {
            DatabaseProvider.instace = new DatabaseProvider();
        }
        return DatabaseProvider.instace;
    }

    public static getHost(): string {
        DatabaseProvider.getInstance();
        return DatabaseProvider.HOST;
    }
    
    public static getPort(): string {
        DatabaseProvider.getInstance();
        return DatabaseProvider.PORT;
    }
  
    public static getPassword(): string {
        DatabaseProvider.getInstance();
        return DatabaseProvider.PWD;
    }
  
    public static getUser(): string {
        DatabaseProvider.getInstance();
        return DatabaseProvider.USER;
    }
  
    public static getName(): string {
        DatabaseProvider.getInstance();
        return DatabaseProvider.NAME;
    }

    public static getDBConnectionString(): string {
        DatabaseProvider.getInstance();
        return `mysql://${DatabaseProvider.USER}:${DatabaseProvider.PWD}@${DatabaseProvider.HOST}:${DatabaseProvider.PORT}/${DatabaseProvider.NAME}`;
    }
}