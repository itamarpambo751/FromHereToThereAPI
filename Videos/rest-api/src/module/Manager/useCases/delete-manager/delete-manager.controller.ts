import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import DeleteManagerUseCase from "./delete-manager.service";

export default class DeleteManagerController
implements Controller {
	constructor(private deleteManagerUseCase: DeleteManagerUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.deleteManagerUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).send()
	}
}