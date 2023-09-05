import { Request, Response } from "express";
import GetCustomerByIdUseCase from "./get-customer-by-id.service";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";

export default class GetCustomerByIdController
implements Controller {
	constructor(private getCustomerByIdUseCase: GetCustomerByIdUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {

		const useCaseResponse = await this.getCustomerByIdUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}