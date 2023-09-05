import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import CreateManagerUseCase from "./create-manager.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class CreateManagerController
implements Controller {
	constructor(private createManagerUseCase: CreateManagerUseCase){}
	async handle(request: Request, response: Response):
	Promise<Response> {
		const manager = await this.createManagerUseCase.execute({
			name: request.body.name,
			email: request.body.email,
			phone: request.body.phone
		})

		return manager instanceof AppError ?
		response.status(manager.status).json(manager):
		response.status(201).json(manager)
	}
}