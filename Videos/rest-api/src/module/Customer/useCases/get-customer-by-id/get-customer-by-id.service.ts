import Customer from "../../customer.module";
import ICustomerRepository from "../../Icustomer.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetCustomerByIdDTO from "./get-customer-by-id.dto";

export default class GetCustomerByIdUseCase
implements UseCase<Customer | AppError> {
	constructor(private customerRespository: ICustomerRepository){}
	async execute({ id }: GetCustomerByIdDTO): Promise<Customer | AppError> {
		try {
			return await this.customerRespository.get(id)
		} catch (err:any) {
			return new AppError("Customer não encontrado!", 404)
		}
	}
}