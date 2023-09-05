import { Request, Response } from "express";
import CreateCustomerUseCase from "./create-customer.service";
import Controller from "../../../../base/controller.base";

export default class CreateCustomerController
implements Controller {
	constructor(
		private useCase: CreateCustomerUseCase
	){}

	async handle(request: Request, response: Response): Promise<Response> {

		const { name, password, phone } = request.body

		await this.useCase.execute({ user_name: name, phone_number: phone, password  })

		return response.status(201).send()
	}
}