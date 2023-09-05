import Restaurant from "../../restaurant.module";
import IRestaurantRepository from "../../Irestaurant.repository";
import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import GetRestaurantByIdDTO from "./get-restaurant-by-id.dto";

export default class GetRestaurantByIdUseCase
implements UseCase<Restaurant | AppError> {
	constructor(private restaurantRespository: IRestaurantRepository){}
	async execute({ id }: GetRestaurantByIdDTO): Promise<Restaurant | AppError> {
		try {
			return await this.restaurantRespository.get(id)
		} catch (err:any) {
			return new AppError("restaurant not found!", 404)
		}
	}
}