export default class PatchProductDTO {
	id: string
	name?: string
	image_url?: string
	price?: number
	description?: string
	constructor({ id, name, image_url, price, description }: PatchProductDTO) {
		this.id = id
		this.name = name
		this.image_url = image_url
		this.price = price
		this.description = description
	}
}