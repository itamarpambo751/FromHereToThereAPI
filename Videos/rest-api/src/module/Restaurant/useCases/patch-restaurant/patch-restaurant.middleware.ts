import * as yup from "yup"
import PatchRestaurantDTO from "./patch-restaurant.dto"
import { validateSchema } from "../../../../helpers"

interface Params { id: string }
interface Body extends Omit<PatchRestaurantDTO, 'id'> {}

const patchRestaurantMiddleware = validateSchema(getSchema => ({
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string()
				.uuid()
				.required("O ´id´ é um valor obrigatório para se fazer a atalização")
        })
    ),
	body: getSchema<Body>(
		yup.object().shape({
			name: yup.string().min(6),
			email: yup.string().email("Envie um email válido."),
			phone: yup.number()
				.min(900000000, "O campo ´phone´ deve ter 9 dígitos para ser um número de telefone válido.")
				.max(999999999, "O campo ´phone´ deve ter 9 dígitos para ser um número de telefone válido.")
		})
	)
}))
export default patchRestaurantMiddleware