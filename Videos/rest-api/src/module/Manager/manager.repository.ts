import prismaClient from "../../prisma/client.prisma";
import IManagerRepository from "./Imanager.repository";
import Manager from "./manager.module";

export default class ManagerRepository
implements IManagerRepository {
	async save(param: Manager):
	Promise<Manager> {
		return await prismaClient.manager.create({
			data: param
		})
	}
	async get(id: string):
	Promise<Manager> {
		return await prismaClient.manager.findUniqueOrThrow({
			where: { id }
		})
	}
	async getAll(take:number, skip:number, search?: string):
	Promise<Manager[]> {
		return search ?
		await prismaClient.manager.findMany({ skip, take, where: { name: { contains: search } } }):
		await prismaClient.manager.findMany({ skip, take })
	}
	async getByEmail(email: string):
	Promise<Manager> {
		return await prismaClient.manager.findUniqueOrThrow({
			where: {
				email
			}
		})
	}
	async getByPhone(phone: number):
	Promise<Manager> {
		return await prismaClient.manager.findUniqueOrThrow({
			where: {
				phone
			}
		})
	}
	async patch(id: string, param: Partial<Manager>):
	Promise<Manager> {
		return await prismaClient.manager.update({
			where: {
				id
			},
			data: param
		})
	}
	async delete(id: string):
	Promise<void> {
		await prismaClient.manager.delete({
			where: {
				id
			}
		})
	}
}