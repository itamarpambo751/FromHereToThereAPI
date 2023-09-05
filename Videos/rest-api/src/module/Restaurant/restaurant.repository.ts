import prismaClient from "../../prisma/client.prisma";
import Restaurant from "./restaurant.module";
import IRestaurantRepository from "./Irestaurant.repository";

export default class RestaurantRepository
implements IRestaurantRepository {
	async save(param: Restaurant):
	Promise<Restaurant> {
		return await prismaClient.restaurant.create({
			data: param
		})
	}
	async get(id: string):
	Promise<Restaurant> {
		return await prismaClient.restaurant.findUniqueOrThrow({
			where: {
				id
			}
		})
	}
	async getByEmail(email: string):
	Promise<Restaurant> {
		return await prismaClient.restaurant.findUniqueOrThrow({
			where: {
				email
			}
		})
	}
	async getAll(take:number, skip:number, search?: string):
	Promise<Restaurant[]> {
		return search ?
		await prismaClient.restaurant.findMany({ skip, take, where: { name: { contains: search } } }):
		await prismaClient.restaurant.findMany({ skip, take })
	}
	async getByPhone(phone: number): Promise<Restaurant> {
		return await prismaClient.restaurant.findUniqueOrThrow({
			where: {
				phone
			}
		})
	}
	async patch(id: string, param: Restaurant):
	Promise<Restaurant> {
		return await prismaClient.restaurant.update({
			where: {
				id
			},
			data: param
		})
	}
	async delete(id: string):
	Promise<void> {
		await prismaClient.restaurant.delete({
			where: {
				id
			}
		})
	}
}