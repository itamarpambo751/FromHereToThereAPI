import CustomerRepository from "../../customer.repository";
import GetCustomerByIdController from "./get-customer-by-id.controller";
import GetCustomerByIdUseCase from "./get-customer-by-id.service";
import getCustomerByIdMiddleware from "./get-customer-by-id.middleware";

const getCustomerByIdUseCase = new GetCustomerByIdUseCase(
	new CustomerRepository
)
const getCustomerByIdController = new GetCustomerByIdController(getCustomerByIdUseCase)

export {
	getCustomerByIdController,
	getCustomerByIdMiddleware
}