import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import DeleteRestaurantUseCase from "./delete-restaurant.service";
import AppError from "../../../../typeErrors/AppError.error";

export default class DeleteRestaurantController
implements Controller {
	constructor(private deleteRestaurantUseCase: DeleteRestaurantUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.deleteRestaurantUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).send()
	}
}