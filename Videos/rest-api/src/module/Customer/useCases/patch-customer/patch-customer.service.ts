import Customer from "../../customer.module";
import ICustomerRepository from "../../Icustomer.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchCustomerDTO from "./patch-customer.dto";

export default class PatchCustomerUseCase
implements UseCase<Customer | AppError> {
	constructor(private customerRepository: ICustomerRepository){}

	async execute(data: PatchCustomerDTO):
	Promise<Customer | AppError> {
		if (await this.customerRepository.get(data.id)) {
			return await this.customerRepository.patch(data.id, data)
		}
		return new AppError("Customer não encontrado!", 404)
	}
}