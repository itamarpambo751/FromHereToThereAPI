import * as yup from "yup"
import CreateRestaurantDTO from "./create-restaurant.dto"
import { validateSchema } from "../../../../helpers"

interface Body
extends Omit<CreateRestaurantDTO, 'id' | 'createdAt' | 'updatedAt'> {}

const createRestaurantMiddleware = validateSchema(getSchema =>( {
    body: getSchema<Body>(
        yup.object().shape({
            name: yup.string()
				.min(6, "O nome do restaurante deve ter um mínimo de 6 caracteres.")
				.required("´name´ é um campo obrigatório."),
			email: yup.string()
				.email("Endereço de email inválido.")
				.required("´email´ é um campo obrigatório."),
			phone: yup.number()
				.min(900000000, "O campo ´phone´ deve ter 9 dígitos para ser um número de telefone válido.")
				.max(999999999, "O campo ´phone´ deve ter 9 dígitos para ser um número de telefone válido.")
				.required("´phone´ é um campo obrigatório."),
			manager_id: yup.string()
				.uuid("Precisa enviar um ´manager_id´ válido.")
				.required("´manager_id´ é um campo obrigatório.")
        })
    )
}))

export default createRestaurantMiddleware