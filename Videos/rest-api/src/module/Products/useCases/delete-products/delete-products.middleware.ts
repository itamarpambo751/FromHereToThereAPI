import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import DeleteProductDTO from "./delete-products.dto"

class Params extends DeleteProductDTO {}

const deleteProductMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required("´id´ é um parâmetro obrigatório.")
        })
    )
}))
export default deleteProductMiddleware