import mongoose from "mongoose";
import { CONFIG_ENV } from "../env";
import { DBConfig } from "./DBConfig";

class MongoDBConfig extends DBConfig {
  load(): void {
    mongoose.connect(this.DB_URI).catch((err) => console.error(err));
  }
}

export const mongoDBConfig = new MongoDBConfig(CONFIG_ENV.MONGO_URL ?? "");
