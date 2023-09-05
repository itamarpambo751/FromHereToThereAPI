export class GetAllRestaurantsDTO {
	page: number
	limit: number
	search?: string | undefined

	constructor({ page, limit, search }: GetAllRestaurantsDTO) {
		this.page = page
		this.limit = limit
		this.search = search
	}
}