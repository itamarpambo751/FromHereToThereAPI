import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import GetManagerListUseCase from "./get-manager-list.service";

export default class GetManagerListController
implements Controller {
	constructor(private getAllManagerUseCase:GetManagerListUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		return response.status(200).json(await this.getAllManagerUseCase.execute({
			page: Number(request.query.page),
			limit: Number(request.query.limit),
			search: request.query.search ? `${request.query.search}`:undefined
		}))
	}
}