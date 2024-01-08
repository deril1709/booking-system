import { DBConfig } from "./DBConfig";
import { mongoDBConfig } from "./MongoDBConfig";

function connectDatabase(dbConfig: DBConfig) {
  return dbConfig;
}

export const databaseConnection = connectDatabase(mongoDBConfig);
