export class GetAllManagerDTO {
	page: number
	limit: number
	search?: string | undefined
	constructor({ page, limit, search }: GetAllManagerDTO) {
		this.page = page
		this.limit = limit
		this.search = search
	}
}