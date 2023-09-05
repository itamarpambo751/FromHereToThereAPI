import UseCase from "../../../../base/use-case.base";
import Order from "../../Orders.module";
import AppError from "../../../../typeErrors/AppError.error";
import CreateOrderDTO from "./create-order.dto";
import IOrderRepository from "../../IOrders.repository";
import IProductRepository from "../../../Products/Iproducts.repository";
import ICustomerRepository from "../../../Customer/Icustomer.repository";

export default class CreateOrderUseCase
implements UseCase<AppError | undefined> {
	constructor(
		private customerRepository: ICustomerRepository,
		private productRepository: IProductRepository,
		private orderRepository: IOrderRepository
	) {}
	async execute(data: CreateOrderDTO):
	Promise<AppError | undefined> {
		
		const order = new Order(data)

		const productExists = await this.productRepository.get(order.product_id)
		
		if (!productExists) return new AppError("Product não encontrado.", 404)

		const customerExists = await this.customerRepository.get(order.customer_id)

		if (!customerExists) return new AppError("Customer não encontrado.", 404)

		await this.orderRepository.save(order)
	}
}