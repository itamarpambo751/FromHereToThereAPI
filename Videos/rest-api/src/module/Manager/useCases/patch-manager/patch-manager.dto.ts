export default class PatchManagerDTO {
	id: string
	name?: string
	phone?: number
	email?: string
	constructor ({ id, name, phone, email }: PatchManagerDTO) {
		this.id = id
		this.name = name
		this.phone = phone
		this.email = email
	}
}