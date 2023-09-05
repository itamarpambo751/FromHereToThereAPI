import Entity from "../../base/entity.base"

export default class Product extends Entity {

	public name: string = ""
	public image_url: string = ""
	public price: number = 0
	public description: string = ""
	public restaurant_id: string = ""
	public createdAt?: Date
	public updatedAt?: Date

	constructor(props: Product) {
		super()
		Object.assign(this, props)
	}
}