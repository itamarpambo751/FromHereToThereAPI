import Entity from "../../base/entity.base"

/**
 *  id 					String @id @default(uuid())
	product_id 			String
	customer_id 		String
	quant				Int
	createdAt 			DateTime @default(now())

	product 			Products @relation(fields: [product_id], references: [id])
	customer 			Customer @relation(fields: [customer_id], references: [id])

	state				String
	updatedAt 			DateTime @updatedAt
 * */
export type AcceptStates = "IN_PROCESS" | "DELETED" | "CANCELED" | "DONE"
interface OrderProps {
	product_id: string
	customer_id: string
	quant?: number
	state?: AcceptStates
	createdAt?: Date
	createdAtYear?: number
	createdAtMonth?: number 
	updatedAt?: Date
}
export default class Order extends Entity {
	product_id: string = ""
	customer_id: string = ""
	quant: number = 0
	state: string = ""
	createdAt?: Date
	createdAtYear: number
	createdAtMonth: number 
	updatedAt?: Date

	constructor(props: OrderProps) {
		super()
		this.product_id = props.product_id
		this.customer_id = props.customer_id
		this.quant = props.quant ? props.quant : 1
		this.state = props.state ? props.state : 'IN_PROCESS'
		this.createdAtYear = props.createdAtYear ? props.createdAtYear : new Date().getFullYear()
		this.createdAtMonth = props.createdAtMonth ? props.createdAtMonth : new Date().getMonth()
	}
}