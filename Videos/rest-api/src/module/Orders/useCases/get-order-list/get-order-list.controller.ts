import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetAllOrderUseCase from "./get-order-list.service";

export default class GetOrderListController
implements Controller {
	constructor(private getAllOrderUseCase:GetAllOrderUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		return response.status(200).json(await this.getAllOrderUseCase.execute({
			page: Number(request.query.page),
			limit: Number(request.query.limit),
			search: request.query.search ? `${request.query.search}`:undefined
		}))
	}
}