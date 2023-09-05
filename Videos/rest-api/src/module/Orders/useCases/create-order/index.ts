import CreateOrderController from "./create-order.controller";
import CreateOrderUseCase from "./create-order.service";
import createOrderMiddleware from "./create-order.middleware";
import CustomerRepository from "../../../Customer/customer.repository"
import ProductRepository from "../../../Products/products.repository"
import OrderRepository from "../../Orders.repository";

const createOrderUseCase = new CreateOrderUseCase(
	new CustomerRepository,
	new ProductRepository,
	new OrderRepository,
)

const createOrderController = new CreateOrderController(createOrderUseCase)

export {
	createOrderController,
	createOrderMiddleware
}