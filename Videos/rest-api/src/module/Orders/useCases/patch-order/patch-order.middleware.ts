import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import PatchOrderDTO from "./patch-order.dto"

interface Params { id: string }
interface Body extends PatchOrderDTO {}

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
			state: yup.string(),
			quant: yup.number().integer().moreThan(0)
		})
	)
}))
export default patchProductMiddleware