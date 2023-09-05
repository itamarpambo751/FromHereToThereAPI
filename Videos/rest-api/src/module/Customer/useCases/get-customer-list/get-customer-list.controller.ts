import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetAllCustomerUseCase from "./get-customer-list.service";

export default class GetCustomerListController
implements Controller {
	constructor(private getAllCustomerUseCase:GetAllCustomerUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		return response.status(200).json(await this.getAllCustomerUseCase.execute({
			page: Number(request.query.page),
			limit: Number(request.query.limit),
			search: request.query.search ? `${request.query.search}`:undefined
		}))
	}
}