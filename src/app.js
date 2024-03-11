import "dotenv/config.js";

import Express, {json} from "express";
import allRouter from "./router/index.js";
import { connectDataBase } from "./db/config.js";
import dataBaseInIt from "./db/init.js";

const app = Express();
connectDataBase();
console.log(process.env, "DB_HOST");
dataBaseInIt().then(() => console.log("db synced"));
app.use(json());
app.use(allRouter);

app.listen(3305, () => console.log("Server is Started"));