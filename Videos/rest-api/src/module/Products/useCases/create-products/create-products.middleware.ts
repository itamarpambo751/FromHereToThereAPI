import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import CreateProductDTO from "./create-products.dto"

interface Body
extends Omit<CreateProductDTO, 'id' | 'createdAt' | 'updatedAt'> {}

const createProductMiddleware = validateSchema(getSchema =>( {
    body: getSchema<Body>(
        yup.object().shape({
            name: yup.string()
				.min(6, "O nome do restaurante deve ter um mínimo de 6 caracteres.")
				.required("´name´ é um campo obrigatório."),
			description: yup.string().required('description é um campo obrigatório.'),
			image_url: yup.string().required("´image_url´ é um campo obrigatório"),
			price: yup.number().required("´price´ é um campo obrigatório."),
			restaurant_id: yup.string()
				.uuid("Precisa enviar um ´restaurant_id´ válido.")
				.required("´restaurant_id´ é um campo obrigatório.")
        })
    )
}))

export default createProductMiddleware