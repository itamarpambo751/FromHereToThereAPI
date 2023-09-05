import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetOrderByIdUseCase from "./get-order-by-id.service";

export default class GetOrderByIdController
implements Controller {
	constructor(private getOrderByIdUseCase: GetOrderByIdUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {

		const useCaseResponse = await this.getOrderByIdUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}