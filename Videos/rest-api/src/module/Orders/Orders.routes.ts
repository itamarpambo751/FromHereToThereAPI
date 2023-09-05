import { Router } from "express";
import { createOrderController, createOrderMiddleware } from "./useCases/create-order";
import { deleteOrderController, deleteOrderMiddleware } from "./useCases/delete-order";
import { getOrderByIdController, getOrderByIdMiddleware } from "./useCases/get-order-by-id";
import { patchOrderController, patchOrderMiddleware } from "./useCases/patch-order";
import { getOrderListController, getOrderListMiddleware } from "./useCases/get-order-list";
import { getOrdersByDateController } from "./useCases/get-by-date";

const OrderRoutes = Router()

.post('/order/', createOrderMiddleware,
	(req, res) => createOrderController.handle(req, res)
)
.get('/order/date', (req, res) => {
	return getOrdersByDateController.handle(req, res)
})
.get('/order/:id', getOrderByIdMiddleware,
	(req, res) => getOrderByIdController.handle(req, res)
)
.get('/order/list/all', getOrderListMiddleware,
	(req, res) => getOrderListController.handle(req, res)
)
.patch('/order/:id', patchOrderMiddleware,
	(req, res) => patchOrderController.handle(req, res)
)
.delete('/order/:id', deleteOrderMiddleware,
	(req, res) => deleteOrderController.handle(req, res)
)

export default OrderRoutes