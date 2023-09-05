import {
	Request,
	Response
} from "express";

export default abstract class Controller {
	abstract handle(
		request: Request,
		response: Response
	):Promise<Response>
}