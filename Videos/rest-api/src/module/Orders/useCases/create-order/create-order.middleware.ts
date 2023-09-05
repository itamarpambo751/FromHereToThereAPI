import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import CreateOderDTO from "./create-order.dto"

interface Body
extends CreateOderDTO {}

const createProductMiddleware = validateSchema(getSchema =>( {
    body: getSchema<Body>(
        yup.object().shape({
			product_id: yup.string()
				.uuid("Precisa enviar um ´product_id´ válido.")
				.required("´product_id´ é um campo obrigatório."),
			customer_id: yup.string()
				.uuid("Precisa enviar um ´customer_id´ válido.")
				.required("´customer_id´ é um campo obrigatório."),
        })
    )
}))

export default createProductMiddleware