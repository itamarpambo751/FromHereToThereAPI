import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import DeleteOderUseCase from "./delete-order.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class DeleteOderController
implements Controller {
	constructor(private deleteOderUseCase: DeleteOderUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.deleteOderUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError
		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).send()
	}
}