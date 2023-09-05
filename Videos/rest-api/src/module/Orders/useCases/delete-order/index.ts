import OrderRepository from "../../Orders.repository";
import DeleteOrderController from "./delete-order.controller";
import DeleteOrderUseCase from "./delete-order.service";
import deleteOrderMiddleware from "./delete-order.middleware";

const orderRepository = new OrderRepository
const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository)
const deleteOrderController = new DeleteOrderController(deleteOrderUseCase)

export {
	deleteOrderController,
	deleteOrderMiddleware
}