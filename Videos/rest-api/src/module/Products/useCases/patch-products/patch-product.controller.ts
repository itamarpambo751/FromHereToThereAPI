import { Request, Response } from "express";
import Controller from "../../../../base/controller.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchProductUseCase from "./patch-product.service";

export default class PatchProductController
implements Controller {
	constructor(private patchProductUseCase: PatchProductUseCase){}
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description, image_url, price } = request.body

		const useCaseResponse = await this.patchProductUseCase.execute({
			id: request.params.id,
			name,
			description,
			image_url,
			price
		})

		return useCaseResponse instanceof AppError

		? response.status(useCaseResponse.status).json(useCaseResponse)
		: response.status(200).json(useCaseResponse)
	}
}