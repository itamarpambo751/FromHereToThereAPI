import Product from "../../products.module";
import IProductRepository from "../../Iproducts.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetProductByIdDTO from "./get-product-by-id.dto";

export default class GetProductByIdUseCase
implements UseCase<Product | AppError> {
	constructor(private productRespository: IProductRepository){}
	async execute({ id }: GetProductByIdDTO): Promise<Product | AppError> {
		try {
			return await this.productRespository.get(id)
		} catch (err:any) {
			return new AppError("Produto não encontrado!", 404)
		}
	}
}