import cors from "cors";
import express from "express";
import { MAX_JSON_SIZE, URL_ENCODE } from "./app/config/config.js";

const app = express();

//App use default middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());

//App use Limiter
const Limiter =rateLimit(passedOptions:{windowMs: REQUEST_TIME,max: REQUEST_NUMBER});
app.use(Limiter);

//Cache
app.set("etag", WEB_CACHE);	//Disable Etag

//Database connection