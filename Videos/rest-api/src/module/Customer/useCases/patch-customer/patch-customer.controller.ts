import { Request, Response } from "express";
import PatchCustomerUseCase from "./patch-customer.service";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";

export default class PatchCustomerController
implements Controller {
	constructor(private patchCustomerUseCase: PatchCustomerUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, phone } = request.body

		const useCaseResponse = await this.patchCustomerUseCase.execute({
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