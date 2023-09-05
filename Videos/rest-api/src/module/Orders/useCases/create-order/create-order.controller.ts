import { Request, Response } from "express"
import Controller from "../../../../base/controller.base";
import CreateOrderUseCase from "./create-order.service";

export default class CreateOrderController
implements Controller {
	constructor(
		private readonly useCase: CreateOrderUseCase
	) {}

	async handle(request: Request, response: Response): Promise<Response> {

		await this.useCase.execute(request.body)

		return response.status(201).send()
	}
}