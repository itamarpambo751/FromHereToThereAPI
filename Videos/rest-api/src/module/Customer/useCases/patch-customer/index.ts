import CustomerRepository from "../../customer.repository";
import PatchCustomerController from "./patch-customer.controller";
import PatchCustomerUseCase from "./patch-customer.service";
import patchCustomerMiddleware from "./patch-customer.middleware";

const patchCustomerUseCase = new PatchCustomerUseCase(
	new CustomerRepository
)
const patchCustomerController = new PatchCustomerController(patchCustomerUseCase)

export {
	patchCustomerController,
	patchCustomerMiddleware
}