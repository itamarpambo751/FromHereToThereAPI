import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import ICustomerRepository from "../../Icustomer.repository";
import DeleteCustomerDTO from "./delete-customer.dto";

export default class DeleteCustomerUseCase
implements UseCase<void | AppError> {
	constructor(
		private customerRepository: ICustomerRepository
	){}

	async execute({ id }: DeleteCustomerDTO): Promise<void | AppError> {
		if (!await this.customerRepository.get(id))
			return new AppError('Customer não encontrado.', 404)
		return await this.customerRepository.delete(id)
	}
}