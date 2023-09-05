import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IOrdersRepository from "../../IOrders.repository";
import DeleteOderDTO from "./delete-order.dto";

export default class DeleteOderUseCase
implements UseCase<void | AppError> {
	constructor(
		private oderRepository: IOrdersRepository
	){}

	async execute({ id }: DeleteOderDTO): Promise<void | AppError> {
		if (!await this.oderRepository.get(id))
			return new AppError('Order não encontrada.', 404)
		return await this.oderRepository.delete(id)
	}
}