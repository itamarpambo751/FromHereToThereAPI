import UseCase from "../../../../base/use-case.base";
import CreateRestaurantDTO from "./create-restaurant.dto";
import IRestaurantRepository from "../../Irestaurant.repository";
import Restaurant from "../../restaurant.module";
import AppError from "../../../../typeErrors/AppError.error";
import IManagerRepository from "../../../Manager/Imanager.repository";

export default class CreateRestaurantUseCase
implements UseCase<AppError> {
	constructor(
		private restaurantRepository: IRestaurantRepository,
		private managerRepository: IManagerRepository
	) {}

	async execute({ name, email, phone, manager_id }:CreateRestaurantDTO):
	Promise<AppError> {
		const restaurant = new Restaurant({ name, email, phone, manager_id })
		try {
			try {
				await this.managerRepository.get(manager_id)
			} catch (error) {
				return new AppError("Gerente não encontrado.", 404)
			}
			//it will be an error if find email
			await this.restaurantRepository.getByEmail(email)
			//code 409 does mean conflict
			return new AppError("Já existe um cliente com esse email.", 409)
		} catch (err:any) {
			try {
				await this.restaurantRepository.getByPhone(phone)
				return new AppError("Já existe um cliente com esse telefone.", 409)
			} catch (err:any) {
				await this.restaurantRepository.save(restaurant)
			}
		}

		return new AppError("Ocorreu um erro inesperado.", 500)
	}
}