import DeleteCustomerController from "./delete-customer.controller";
import DeleteCustomerUseCase from "./delete-customer.service";
import deleteCustomerMiddleware from "./delete-customer.middleware";
import CustomerRepository from "../../customer.repository";

const customerRepository = new CustomerRepository
const deleteCustomerUseCase = new DeleteCustomerUseCase(customerRepository)
const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase)

export {
	deleteCustomerController,
	deleteCustomerMiddleware
}