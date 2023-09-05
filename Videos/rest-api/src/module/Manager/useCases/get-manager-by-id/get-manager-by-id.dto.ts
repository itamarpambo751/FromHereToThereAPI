export default class GetManagerByIdDTO {
	readonly id: string

	constructor ({ id }: GetManagerByIdDTO) {
		this.id = id
	}
}