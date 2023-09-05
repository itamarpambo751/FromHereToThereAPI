import UseCase from "../../../../base/use-case.base";
import { GeneratePreviousAndNextRequest } from "../../../../helpers";
import ICustomerRepository from "../../Icustomer.repository";
import Customer from "../../customer.module";
import { GetAllCustomerDTO } from "./get-customer-list.dto";

export default class GetCustomerListUseCase
implements UseCase<{ next?: string | Boolean, previous?: string | Boolean, result: Customer[] }> {
	constructor(private customerRespository: ICustomerRepository){}
	async execute({ page, limit, search }: GetAllCustomerDTO): 
	Promise<{ next?: string | Boolean, previous?: string | Boolean, result: Customer[] }> {
		const result = await this.customerRespository.getAll(limit, limit * (page - 1), search)
		const ensureAction = await GeneratePreviousAndNextRequest({
			gatewayInterface: this.customerRespository,
			_baseEntity: 'customer', page, limit, search
		})
		return { ...ensureAction, result }
	}
}