import UseCase from "../../../../base/use-case.base";
import IOrdersRepository from "../../IOrders.repository";
import Order from "../../Orders.module";

export default class GetOrdersByDateUseCase
implements UseCase<Order[]> {
    constructor (private readonly ordersRepository: IOrdersRepository) {}
    async execute(): 
    Promise<Order[]> {
        const date = new Date()
        return [
            ...await this.ordersRepository.getByDate({ date })
        ]
    }
}