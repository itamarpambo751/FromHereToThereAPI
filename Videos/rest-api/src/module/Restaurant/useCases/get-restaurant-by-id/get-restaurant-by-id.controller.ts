import { Request, Response } from "express";
import GetRestaurantByIdUseCase from "./get-restaurant-by-id.service";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";

export default class GetRestaurantByIdController
implements Controller {
	constructor(private getRestaurantByIdUseCase: GetRestaurantByIdUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {

		const useCaseResponse = await this.getRestaurantByIdUseCase.execute({ id: request.params.id })

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}