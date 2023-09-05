import { StatusCodes } from "http-status-codes"

export default class AppError {
	status: number
	message: any
	
	constructor(message: any, status = StatusCodes.BAD_REQUEST) {
		this.status = status
		this.message = message
	}
}