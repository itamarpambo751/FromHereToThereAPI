import * as yup from "yup"
import { validateSchema } from "../../../../helpers";

class Params { 
	id: string 
	constructor ({ id }: Params) {
		this.id = id
	}
}

const getManagerByIdMiddleware = validateSchema(getSchema => ({
	params: getSchema<Params>(
		yup.object().shape({
			id: yup.string().required("O parâmetro ´id´ é obrigatório.")
		})
	)
}))

export default getManagerByIdMiddleware