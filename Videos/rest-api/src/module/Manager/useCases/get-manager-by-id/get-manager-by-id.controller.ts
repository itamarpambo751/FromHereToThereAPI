import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetManagerByIdUseCase from "./get-manager-by-id.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class GetManagerByIdController
implements Controller {
	constructor(private getManagerByIdUseCase: GetManagerByIdUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const manager = await this.getManagerByIdUseCase.execute({ id: request.params.id })

		return manager instanceof AppError ? response.status(manager.status).json(manager)
		:response.status(200).json(manager)
	}
}