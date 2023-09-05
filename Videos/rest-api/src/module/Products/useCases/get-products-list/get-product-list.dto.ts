export class GetAllProductDTO {
	page: number
	limit: number
	search?: string | undefined

	constructor ({ page, limit, search }: GetAllProductDTO) {
		this.limit = limit
		this.search = search
		this.page = page
	}
}