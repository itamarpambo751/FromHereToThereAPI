import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import ICustomerRepository from "../../Icustomer.repository";
import CreateCustomerDTO from "./create-customer.dto";
import Customer from "../../customer.module";

export default class CreateCustomerUseCase
implements UseCase<AppError | undefined> {
	constructor(
		private customerRepository: ICustomerRepository,
	) {}

	async execute({ user_name, password, phone_number }: CreateCustomerDTO):
	Promise<AppError | undefined> {
		const customer = new Customer({ user_name, password, phone_number })

		try {
			await this.customerRepository.getByPhone(phone_number)

			return new AppError("Username ou número de telefone inválido.")
		} catch (error:any) {
			try {
				await this.customerRepository.getByUserName(user_name)

				return new AppError("Username ou número de telefone inválido.")
			} catch (error:any) {
				await this.customerRepository.save(customer)
			}
		}
	}
}