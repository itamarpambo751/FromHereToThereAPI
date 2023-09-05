import Entity from "../../base/entity.base"

export default class Restaurant extends Entity {

	public name: string  = ""
	public email: string = ""
	public phone: number = 0
	public manager_id: string = ""
	public createdAt?: Date
	public updatedAt?: Date

	constructor(props: Restaurant) {
		super()
		Object.assign(this, props)
	}
}