import prismaClient from "../../prisma/client.prisma";
import Customer from "./customer.module";
import ICustomerRepository from "./Icustomer.repository";

export default class CustomerRepository
implements ICustomerRepository {
	async save(param: Customer):
	Promise<Customer> {
		return await prismaClient.customer.create({
			data: param
		})
	}
	async get(id: string):
	Promise<Customer> {
		return await prismaClient.customer.findUniqueOrThrow({
			where: {
				id
			}
		})
	}
	async getByUserName(user_name: string):
	Promise<Customer> {
		return await prismaClient.customer.findUniqueOrThrow({
			where: {
				user_name
			}
		})
	}
	async getAll(take:number, skip:number, search?: string):
	Promise<Customer[]> {
		return search ?
		await prismaClient.customer.findMany({ skip, take, where: { user_name: { contains: search } } }):
		await prismaClient.customer.findMany({ skip, take })
	}
	async getByPhone(phone: number): Promise<Customer> {
		return await prismaClient.customer.findUniqueOrThrow({
			where: {
				phone_number: phone
			}
		})
	}
	async patch(id: string, param: Customer):
	Promise<Customer> {
		return await prismaClient.customer.update({
			where: {
				id
			},
			data: param
		})
	}
	async delete(id: string):
	Promise<void> {
		await prismaClient.customer.delete({
			where: {
				id
			}
		})
	}
}