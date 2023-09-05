import CustomerRepository from "../../customer.repository"
import GetCustomerListController from "./get-customer-list.controller"
import getCustomerListMiddleware from "./get-customer-list.middleware"
import GetCustomerListUseCase from "./get-customer-list.service"

const getCustomerListUseCase = new GetCustomerListUseCase(
	new CustomerRepository
)
const getCustomerListController = new GetCustomerListController(getCustomerListUseCase)

export {
	getCustomerListController,
	getCustomerListMiddleware
}