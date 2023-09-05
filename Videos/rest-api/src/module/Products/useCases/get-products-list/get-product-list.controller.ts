import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetAllProductUseCase from "./get-product-list.service";

export default class GetProductListController
implements Controller {
	constructor(private getAllProductUseCase:GetAllProductUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		return response.status(200).json(await this.getAllProductUseCase.execute({
			page: Number(request.query.page),
			limit: Number(request.query.limit),
			search: request.query.search ? `${request.query.search}`:undefined
		}))
	}
}