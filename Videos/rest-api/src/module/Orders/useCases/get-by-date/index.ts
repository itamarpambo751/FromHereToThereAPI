import GetOrdersByDateUseCase from "./get-by-date.service";
import OrdersRepository from "../../Orders.repository"
import GetOrdersByDateController from "./get-by-date.controller";

const getOrdersByDateUseCase = new GetOrdersByDateUseCase(
    new OrdersRepository
)
const getOrdersByDateController = new GetOrdersByDateController(getOrdersByDateUseCase)

export {
    getOrdersByDateController
}