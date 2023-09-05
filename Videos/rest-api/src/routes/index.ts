import { Router } from "express";
import RestaurantRoutes from "../module/Restaurant/restaurant.routes";
import managerRoutes from "../module/Manager/manager.routes";
import ProductRoutes from "../module/Products/products.routes";
import CustomerRoutes from "../module/Customer/customer.routes";
import OrderRoutes from "../module/Orders/Orders.routes";

const Routes = Router()

Routes.use(RestaurantRoutes)
Routes.use(managerRoutes)
Routes.use(ProductRoutes)
Routes.use(CustomerRoutes)
Routes.use(OrderRoutes)


export default Routes