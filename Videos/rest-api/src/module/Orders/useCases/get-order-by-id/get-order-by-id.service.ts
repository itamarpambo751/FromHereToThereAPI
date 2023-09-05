import Order from "../../Orders.module";
import IOrderRepository from "../../IOrders.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetOrderByIdDTO from "./get-order-by-id.dto";

export default class GetOrderByIdUseCase
implements UseCase<Order | AppError> {
	constructor(private orderRespository: IOrderRepository){}
	async execute({ id }: GetOrderByIdDTO): Promise<Order | AppError> {
		try {
			return await this.orderRespository.get(id)
		} catch (err:any) {
			return new AppError("Order não encontrada!", 404)
		}
	}
}