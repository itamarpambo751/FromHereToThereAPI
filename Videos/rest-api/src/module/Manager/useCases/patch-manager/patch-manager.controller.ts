import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchManagerUseCase from "./patch-manager.service";

export default class PatchManagerController
implements Controller {
	constructor(private patchManagerUseCase: PatchManagerUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, phone } = request.body

		const useCaseResponse = await this.patchManagerUseCase.execute({
			id: request.params.id,
			name,
			email,
			phone
		})

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}