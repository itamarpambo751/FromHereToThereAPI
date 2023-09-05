import Entity from "../../base/entity.base";

export default class Manager extends Entity {
	readonly name: string = ""
	readonly phone: number = 0
	readonly email: string = ""

	constructor(props: Manager) {
		super()
		Object.assign(this, props)
	}
}