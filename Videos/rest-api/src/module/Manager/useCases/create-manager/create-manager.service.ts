import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IRestaurantRepository from "../../../Restaurant/Irestaurant.repository";
import IManagerRepository from "../../Imanager.repository";
import Manager from "../../manager.module";
import CreateManagerDTO from "./create-manager.dto";

export default class CreateManagerUseCase
implements UseCase<Partial<Manager> | AppError> {
	constructor(
		private managerRepository: IManagerRepository,
		private restaurantRepository: IRestaurantRepository
	){}
	async execute({ name, email, phone }:CreateManagerDTO):
	Promise<Partial<Manager> | AppError> {

		const manager = new Manager({ name, email, phone })

		try {
			await this.managerRepository.getByEmail(manager.email)
			return new AppError("Este endereço de email já está a ser usado por um cliente.", 409)
		} catch (err:any) {
			try {
				await this.managerRepository.getByPhone(manager.phone)
				return new AppError("Esse número de telefone já está sendo usado por um cliente.", 409)
			} catch (error) {
				try {
					await this.restaurantRepository.getByEmail(manager.email)
					return new AppError("Este endereço de email já está a ser usado por um cliente.", 409)
				} catch (error) {
					try {
						await this.restaurantRepository.getByPhone(manager.phone)
						return new AppError("Esse número de telefone já está sendo usado por um cliente.", 409)
					} catch (error) {
						const { id } = await this.managerRepository.save(manager)
						return { id }
					}
				}
			}
		}
	}
}