import IRepository from "../../base/repository.base";
import Restaurant from "./restaurant.module";

export default abstract class IRestaurantRepository extends IRepository<Restaurant> {
	abstract getByEmail(email: string): Promise<Restaurant>
	abstract getAll(take:number, skip:number, search?: string): Promise<Restaurant[]>
	abstract getByPhone(phone: number): Promise<Restaurant>
}