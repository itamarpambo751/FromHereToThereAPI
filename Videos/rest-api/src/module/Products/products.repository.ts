import prismaClient from "../../prisma/client.prisma";
import Product from "./products.module";
import IProductRepository from "./Iproducts.repository";

export default class ProductRepository
implements IProductRepository {
	async save(param: Product):
	Promise<Product> {
		return await prismaClient.products.create({
			data: param
		})
	}
	async get(id: string):
	Promise<Product> {
		return await prismaClient.products.findUniqueOrThrow({
			where: {
				id
			}
		})
	}
	async getAll(take:number, skip:number, search?: string):
	Promise<Product[]> {
		return search ?
		await prismaClient.products.findMany({ skip, take, where: { name: { contains: search } } }):
		await prismaClient.products.findMany({ skip, take })
	}
	async patch(id: string, param: Product):
	Promise<Product> {
		return await prismaClient.products.update({
			where: {
				id
			},
			data: param
		})
	}
	async delete(id: string):
	Promise<void> {
		await prismaClient.products.delete({
			where: {
				id
			}
		})
	}
}