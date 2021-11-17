import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { PORT } from "./utils/env.util";
import publisherRoutes from './routes/publisher.route'

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        msg: `Publisher server running on ${req.headers.host}`,
    });
});

app.use('/publish', publisherRoutes)


export default app.listen(PORT, () => console.log(`Publisher server listening on PORT ${PORT}`));
