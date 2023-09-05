import IRepository from "../../base/repository.base";
import Order from "./Orders.module";

export type ByDate = {
	date: Date
	month?: Boolean
}
export default abstract class IOrdersRepository extends IRepository<Order> {
	abstract getAll(take:number, skip:number, search?: string): Promise<Order[]>
	abstract getByDate({ date, month }: ByDate): Promise<Order[]>
}