import prismaClient from "../../prisma/client.prisma";
import Order from "./Orders.module";
import IOrdersRepository, { ByDate } from "./IOrders.repository";

export default class OrdersRepository
implements IOrdersRepository {
	async save(param: Order):
	Promise<Order> {
		return await prismaClient.order.create({
			data: param
		})
	}
	async get(id: string):
	Promise<Order> {
		return await prismaClient.order.findUniqueOrThrow({
			where: {
				id
			}
		})
	}
	async getAll(take:number, skip:number, search?: string):
	Promise<Order[]> {
		return await prismaClient.order.findMany({ skip, take })
	}
	async patch(id: string, param: Order):
	Promise<Order> {
		return await prismaClient.order.update({
			where: {
				id
			},
			data: param
		})
	}
	async getByDate({ date, month }: ByDate): Promise<Order[]> {
		return month ? await  prismaClient.order.findMany({
			where: {
				createdAtYear: {
					equals: date.getFullYear(),
				},
				createdAtMonth: {
					equals: date.getMonth()
				}
			}
		}):await  prismaClient.order.findMany({
			where: {
				createdAtYear: {
					equals: date.getFullYear()
				}
			}
		})
	}	
	async delete(id: string):
	Promise<void> {
		await prismaClient.order.delete({
			where: {
				id
			}
		})
	}
}