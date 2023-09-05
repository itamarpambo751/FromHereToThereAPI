import OrdersRepository from "../../Orders.repository"
import GetOrderListController from "./get-order-list.controller"
import getOrderListMiddleware from "./get-order-list.middleware"
import GetOrderListUseCase from "./get-order-list.service"

const getOrderListUseCase = new GetOrderListUseCase(
	new OrdersRepository
)
const getOrderListController = new GetOrderListController(getOrderListUseCase)

export {
	getOrderListController,
	getOrderListMiddleware
}