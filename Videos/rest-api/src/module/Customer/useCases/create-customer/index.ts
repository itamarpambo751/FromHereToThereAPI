import CreateCustomerController from "./create-customer.controller";
import CreateCustomerUseCase from "./create-customer.service";
import CustomerRepository from "../../customer.repository";
import createCustomerMiddleware from "./create-customer.middleware";

const createCustomerUseCase = new CreateCustomerUseCase(
	new CustomerRepository,
)

const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export {
	createCustomerController,
	createCustomerMiddleware
}