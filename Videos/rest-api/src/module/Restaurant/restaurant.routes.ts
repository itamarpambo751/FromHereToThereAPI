import { Router } from "express";
import { createRestaurantController, createRestaurantMiddleware } from "./useCases/create-restaurant";
import { getRestaurantByIdController, getRestaurantByIdMiddleware } from "./useCases/get-restaurant-by-id";
import { patchRestaurantController, patchRestaurantMiddleware } from "./useCases/patch-restaurant";
import { deleteRestaurantController, deleteRestaurantMiddleware } from "./useCases/delete-restaurant";
import { getRestaurantListController, getRestaurantListMiddleware } from "./useCases/get-restaurant-list";

const RestaurantRoutes = Router()

.post('/restaurant/', createRestaurantMiddleware,
	(req, res) => createRestaurantController.handle(req, res)
)
.get('/restaurant/:id', getRestaurantByIdMiddleware,
	(req, res) => getRestaurantByIdController.handle(req, res)
)
.get('/restaurant/list/all', getRestaurantListMiddleware,
	(req, res) => getRestaurantListController.handle(req, res)
)
.patch('/restaurant/:id', patchRestaurantMiddleware,
	(req, res) => patchRestaurantController.handle(req, res)
)
.delete('/restaurant/:id', deleteRestaurantMiddleware,
	(req, res) => deleteRestaurantController.handle(req, res)
)

export default RestaurantRoutes