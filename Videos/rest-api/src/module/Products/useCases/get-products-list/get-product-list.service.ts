import UseCase from "../../../../base/use-case.base";
import { GeneratePreviousAndNextRequest } from "../../../../helpers";
import IProductRepository from "../../Iproducts.repository";
import Product from "../../products.module";
import { GetAllProductDTO } from "./get-product-list.dto";

export default class GetProductListUseCase
implements UseCase<{ next?: string | Boolean, previous?: string | Boolean, result: Product[] }> {
	constructor(private productRespository: IProductRepository){}
	async execute({ page, limit, search }:GetAllProductDTO): 
	Promise<{ next?: string | Boolean, previous?: string | Boolean, result: Product[] }> {
		const result = await this.productRespository.getAll(limit, limit * (page - 1), search)
		const ensureAction = await GeneratePreviousAndNextRequest({
			gatewayInterface: this.productRespository,
			_baseEntity: 'product', page, limit, search
		})
		return { ...ensureAction, result }
	}
}