export default class PatchOrderDTO {
	
	quant?: number = 0
	state?: string = ""

	constructor({ quant, state }: PatchOrderDTO) {
		this.quant = quant
		this.state = state
	}
}