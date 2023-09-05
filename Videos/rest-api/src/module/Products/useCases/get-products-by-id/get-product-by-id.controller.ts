import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetProductByIdUseCase from "./get-product-by-id.service";

export default class GetProductByIdController
implements Controller {
	constructor(private getProductByIdUseCase: GetProductByIdUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {

		const useCaseResponse = await this.getProductByIdUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}