import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetAllRestaurantUseCase from "./get-restaurant-list.service";

export default class GetRestaurantListController
implements Controller {
	constructor(private getAllRestaurantUseCase:GetAllRestaurantUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		console.log('Controller!');

		return response.status(200).json(await this.getAllRestaurantUseCase.execute({
			page: Number(request.query.page),
			limit: Number(request.query.limit),
			search: request.query.search ? `${request.query.search}`:undefined
		}))
	}
}