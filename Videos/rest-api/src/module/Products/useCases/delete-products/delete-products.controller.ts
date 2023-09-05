import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import DeleteProductUseCase from "./delete-products.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class DeleteProductController
implements Controller {
	constructor(private deleteProductUseCase: DeleteProductUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.deleteProductUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).send()
	}
}