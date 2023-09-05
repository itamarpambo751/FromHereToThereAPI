import Product from "../../products.module";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchProductDTO from "./patch-product.dto";
import IProductRepository from "../../Iproducts.repository";

export default class PatchProductUseCase
implements UseCase<Product | AppError> {
	constructor(private productRepository: IProductRepository){}

	async execute(data: PatchProductDTO):
	Promise<Product | AppError> {

		const objectFilter = Object.fromEntries(Object.entries(data).filter(([, value]) => value))

		if (await this.productRepository.get(objectFilter.id)) {
			return await this.productRepository.patch(objectFilter.id, objectFilter)
		}
		return new AppError("Produto não encontrado!", 404)
	}
}