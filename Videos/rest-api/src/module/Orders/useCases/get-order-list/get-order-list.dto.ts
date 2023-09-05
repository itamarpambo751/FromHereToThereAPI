export class GetAllOrderDTO {
	page: number
	limit: number
	search?: string | undefined

	constructor ({ page, limit, search }: GetAllOrderDTO) {
		this.limit = limit
		this.search = search
		this.page = page
	}
}