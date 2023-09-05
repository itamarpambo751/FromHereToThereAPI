import { Request, Response } from "express"
import Controller from "../../../../base/controller.base";
import CreateProductUseCase from "./create-products.service";

export default class CreateProductController
implements Controller {
	constructor(
		private readonly useCase: CreateProductUseCase
	) {}

	async handle(request: Request, response: Response): Promise<Response> {

		const { name, image_url, price, description, restaurant_id } = request.body

		await this.useCase.execute({ name, image_url, price, description, restaurant_id })

		return response.status(201).send()
	}
}