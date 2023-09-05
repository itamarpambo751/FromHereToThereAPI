import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import PatchProductDTO from "./patch-product.dto"

interface Params { id: string }
interface Body extends Omit<PatchProductDTO, 'id'> {}

const patchProductMiddleware = validateSchema(getSchema => ({
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string()
				.uuid()
				.required("O ´id´ é um valor obrigatório para se fazer a atalização")
        })
    ),
	body: getSchema<Body>(
		yup.object().shape({
			name: yup.string().min(6, "´name´ deve ter pelo menos 6 caracteres"),
			image_url: yup.string(),
			price: yup.number(),
			description: yup.string()
		})
	)
}))
export default patchProductMiddleware