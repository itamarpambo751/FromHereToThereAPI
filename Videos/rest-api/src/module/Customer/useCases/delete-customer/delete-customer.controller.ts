import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import DeleteCustomerUseCase from "./delete-customer.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class DeleteCustomerController
implements Controller {
	constructor(private deleteCustomerUseCase: DeleteCustomerUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.deleteCustomerUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).send()
	}
}