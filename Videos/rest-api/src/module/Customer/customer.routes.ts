import { Router } from "express";
import { createCustomerController, createCustomerMiddleware } from "./useCases/create-customer";
import { getCustomerByIdController, getCustomerByIdMiddleware } from "./useCases/get-customer-by-id";
import { patchCustomerController, patchCustomerMiddleware } from "./useCases/patch-customer";
import { deleteCustomerController, deleteCustomerMiddleware } from "./useCases/delete-customer";
import { getCustomerListController, getCustomerListMiddleware } from "./useCases/get-customer-list";

const CustomerRoutes = Router()

.post('/customer/', createCustomerMiddleware,
	(req, res) => createCustomerController.handle(req, res)
)
.get('/customer/:id', getCustomerByIdMiddleware,
	(req, res) => getCustomerByIdController.handle(req, res)
)
.get('/customer/list/all', getCustomerListMiddleware,
	(req, res) => getCustomerListController.handle(req, res)
)
.patch('/customer/:id', patchCustomerMiddleware,
	(req, res) => patchCustomerController.handle(req, res)
)
.delete('/customer/:id', deleteCustomerMiddleware,
	(req, res) => deleteCustomerController.handle(req, res)
)

export default CustomerRoutes