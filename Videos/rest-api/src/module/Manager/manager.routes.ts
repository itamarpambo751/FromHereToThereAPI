import { Router } from "express";
import { createManagerController, createManagerMiddleware } from "./useCases/create-manager";
import { getManagerByIdController, getManagerByIdMiddleware } from "./useCases/get-manager-by-id";
import { patchManagerController, patchManagerMiddleware } from "./useCases/patch-manager";
import { getManagerListController, getManagerListMiddleware } from "./useCases/get-manager-list";
import { deleteManagerController, deleteManagerMiddleware } from "./useCases/delete-manager";

const managerRoutes = Router()

.post("/manager", createManagerMiddleware,
	(req, res) => createManagerController.handle(req, res)
)
.get("/manager/:id", getManagerByIdMiddleware,
	(req, res) => getManagerByIdController.handle(req, res)
)
.get("/manager/list/all", getManagerListMiddleware,
	(req, res) => getManagerListController.handle(req, res)
)
.patch("/manager/:id", patchManagerMiddleware,
	(req, res) => patchManagerController.handle(req, res)
)
.delete("/manager/:id", deleteManagerMiddleware,
	(req, res) => deleteManagerController.handle(req, res)
)

export default managerRoutes