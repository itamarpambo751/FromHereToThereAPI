import IRepository from "../../base/repository.base";
import Customer from "./customer.module";

export default abstract class ICustomerRepository extends IRepository<Customer> {
	abstract getByUserName(email: string): Promise<Customer>
	abstract getAll(take:number, skip:number, search?: string): Promise<Customer[]>
	abstract getByPhone(phone: number): Promise<Customer>
}