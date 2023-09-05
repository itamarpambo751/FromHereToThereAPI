import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IProductRepository from "../../Iproducts.repository";
import DeleteProductDTO from "./delete-products.dto";

export default class DeleteProductUseCase
implements UseCase<void | AppError> {
	constructor(
		private productRepository: IProductRepository
	){}

	async execute({ id }: DeleteProductDTO): Promise<void | AppError> {
		if (!await this.productRepository.get(id))
			return new AppError('Produto não encontrado.', 404)
		return await this.productRepository.delete(id)
	}
}