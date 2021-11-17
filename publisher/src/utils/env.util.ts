import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const QUEUE_PROTOCOL = process.env.QUEUE_PROTOCOL;
export const QUEUE_USER = process.env.QUEUE_USER;
export const QUEUE_PASSWORD = process.env.QUEUE_PASSWORD;
export const QUEUE_HOST = process.env.QUEUE_HOST;