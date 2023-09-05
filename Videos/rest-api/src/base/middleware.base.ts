import { RequestHandler } from "express";

type Middleware<T> = (param?: T) => RequestHandler

export default Middleware