import { Request, Response } from "express";
import CreateRestaurantUseCase from "./create-restaurant.service";
import Controller from "../../../../base/controller.base";

export default class CreateRestaurantController
implements Controller {
	constructor(
		private useCase: CreateRestaurantUseCase
	){}

	async handle(request: Request, response: Response): Promise<Response> {

		const { name, email, phone, manager_id } = request.body

		await this.useCase.execute({ name, email, phone, manager_id })

		return response.status(201).send()
	}
}