import UseCase from "../../../../base/use-case.base";
import { GeneratePreviousAndNextRequest } from "../../../../helpers";
import IOrdersRepository from "../../IOrders.repository";
import Order from "../../Orders.module";
import { GetAllOrderDTO } from "./get-order-list.dto";

export default class GetOrderListUseCase
implements UseCase<{ next?: string | Boolean, previous?: string | Boolean, result: Order[] }> {
	constructor(
		private readonly orderRespository: IOrdersRepository
	) {}
	async execute({ page, limit, search }: GetAllOrderDTO): 
	Promise<{ next?: string | Boolean, previous?: string | Boolean, result: Order[] }> {
		const result = await this.orderRespository.getAll(limit, limit * (page - 1), search)
		const ensureAction = await GeneratePreviousAndNextRequest({
			gatewayInterface: this.orderRespository,
			_baseEntity: 'order', page, limit, search
		})
		return { ...ensureAction, result }
	}
}