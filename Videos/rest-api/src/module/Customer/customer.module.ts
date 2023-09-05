import Entity from "../../base/entity.base"

export default class Customer extends Entity {

	public user_name: string
	public password: string
	public phone_number: number

	constructor({ user_name, password, phone_number }: Customer) {
		super()
		this.user_name = user_name
		this.phone_number = phone_number
		this.password = password
	}
}