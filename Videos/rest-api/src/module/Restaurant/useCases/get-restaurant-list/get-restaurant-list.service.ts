import UseCase from "../../../../base/use-case.base";
import { GeneratePreviousAndNextRequest } from "../../../../helpers";
import IRestaurantRepository from "../../Irestaurant.repository";
import Restaurant from "../../restaurant.module";
import { GetAllRestaurantsDTO } from "./get-restaurant-list.dto";

export default class GetRestaurantListUseCase
implements UseCase<{ next?: string | Boolean, previous?: string | Boolean, result: Restaurant[] }> {
	constructor(private restaurantRespository: IRestaurantRepository) {}

	async execute({ page, limit, search }: GetAllRestaurantsDTO): 
	Promise<{ next?: string | Boolean, previous?: string | Boolean, result: Restaurant[] }> {
		const result = await this.restaurantRespository.getAll(limit, limit * (page - 1), search)
		const ensureAction = await GeneratePreviousAndNextRequest({
			gatewayInterface: this.restaurantRespository,
			_baseEntity: 'restaurant', page, limit, search
		})
		return { ...ensureAction, result }
	}
}