import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchOrderUseCase from "./patch-order.service";

export default class PatchOrderController
implements Controller {
	constructor(private patchOrderUseCase: PatchOrderUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const useCaseResponse = await this.patchOrderUseCase.execute(request.body)
		return useCaseResponse instanceof AppError
		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}