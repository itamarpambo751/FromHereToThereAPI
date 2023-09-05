import Restaurant from "../../restaurant.module";
import IRestaurantRepository from "../../Irestaurant.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import PatchRestaurantDTO from "./patch-restaurant.dto";

export default class PatchRestaurantUseCase
implements UseCase<Restaurant | AppError> {
	constructor(private restaurantRepository: IRestaurantRepository){}

	async execute(data: PatchRestaurantDTO):
	Promise<Restaurant | AppError> {

		const objectFilter = Object.entries(data).filter(([, value]) => value)

		if (await this.restaurantRepository.get(data.id)) {
			return await this.restaurantRepository.patch(data.id, data)
		}
		return new AppError("Restaurante não encontrado!", 404)
	}
}