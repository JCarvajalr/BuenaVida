import mysql, { Pool } from "mysql2/promise";
import DatabaseProvider from "../provider/DatabaseProvider";

export default class Database {
    private static instace: Database;
    private readonly pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: DatabaseProvider.getHost(),
            user: DatabaseProvider.getUser(),
            password: DatabaseProvider.getPassword(),
            database: DatabaseProvider.getName(),
            port: Number(DatabaseProvider.getPort()),
            waitForConnections: true,
            connectionLimit: 10, 
            queueLimit: 0,
        });
    }

    public static getInstance(): Database {
        if (!Database.instace) {
            Database.instace = new Database();
        }
        return Database.instace;
    }

    public getPool(): Pool {
        return this.pool;
    }

    public async executeQuery(query: string, params: any[] = []): Promise<any> {
        try {
            const [rows] = await this.pool.execute(query, params);
            return rows;
        } catch (error) {
            console.error("Error in Query:", error);
            return [];
        }
    }

    public async closePool(): Promise<void> {
        try {
            await this.pool.end();
            console.log("Pool closed correctly");
        } catch (error) {
            console.error("Error to close pool conections:", error);
        }
    }
}