export class GetAllCustomerDTO {
	page: number
	limit: number
	search?: string | undefined
	constructor({ page, limit, search }: GetAllCustomerDTO) {
		this.page = page
		this.limit = limit
		this.search = search
	}
}