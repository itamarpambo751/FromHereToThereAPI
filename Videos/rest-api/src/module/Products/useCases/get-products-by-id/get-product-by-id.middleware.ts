import * as yup from "yup"
import GetProductByIdDTO from "./get-product-by-id.dto"
import { validateSchema } from "../../../../helpers"

class Params extends GetProductByIdDTO {}

const getProductByIdMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required('´id´ é um parâmetro obrigatório.')
        })
    )
}))
export default getProductByIdMiddleware