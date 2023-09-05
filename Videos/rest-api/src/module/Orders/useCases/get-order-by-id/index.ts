import OrderRepository from "../../Orders.repository";
import GetOrderByIdController from "./get-order-by-id.controller";
import getOrderByIdMiddleware from "./get-order-by-id.middleware";
import GetOrderByIdUseCase from "./get-order-by-id.service";


const getOrderByIdUseCase = new GetOrderByIdUseCase(
	new OrderRepository
)
const getOrderByIdController = new GetOrderByIdController(getOrderByIdUseCase)

export {
	getOrderByIdController,
	getOrderByIdMiddleware
}