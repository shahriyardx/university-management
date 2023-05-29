import Express, { Application } from "express";
import cors from "cors";

const app: Application = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

export default app;
