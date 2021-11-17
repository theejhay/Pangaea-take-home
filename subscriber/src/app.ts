import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { PORT } from "./utils/env.util";
import subscribeRoute from './routes/subscriber.routes'

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        msg: `Subscriber server running on ${req.headers.host}`,
    });
});

app.use('/subscribe', subscribeRoute)

export default app.listen(PORT, () => console.log(`Subscriber server listening on PORT ${PORT}`));
