export default class PatchCustomerDTO {
	id: string
	name?: string
	email?: string
	phone?: number

	constructor ({ id, name, email, phone }: PatchCustomerDTO) {
		this.id = id
		this.name = name
		this.email = email
		this.phone = phone
	}
}