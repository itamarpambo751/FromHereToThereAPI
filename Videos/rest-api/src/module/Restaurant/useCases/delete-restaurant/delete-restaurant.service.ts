import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IRestaurantRepository from "../../Irestaurant.repository";
import DeleteRestaurantDTO from "./delete-restaurant.dto";

export default class DeleteRestaurantUseCase
implements UseCase<void | AppError> {
	constructor(
		private restaurantRepository: IRestaurantRepository
	){}

	async execute({ id }: DeleteRestaurantDTO): Promise<void | AppError> {
		if (!await this.restaurantRepository.get(id))
			return new AppError('Restaurant não encontrado.', 404)
		return await this.restaurantRepository.delete(id)
	}
}