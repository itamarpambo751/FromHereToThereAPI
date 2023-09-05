import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchOrderDTO from "./patch-order.dto";
import IOrdersRepository from "../../IOrders.repository";

export default class PatchOrdersUseCase
implements UseCase<undefined | AppError> {
	constructor(private OrdersRepository: IOrdersRepository){}

	async execute(data: PatchOrderDTO):
	Promise<undefined | AppError> {

		const objectFilter = Object.fromEntries(Object.entries(data).filter(([, value]) => value))

		if (await this.OrdersRepository.get(objectFilter.id))
			await this.OrdersRepository.patch(objectFilter.id, objectFilter)

		return new AppError("Order não encontrada!", 404)
	}
}