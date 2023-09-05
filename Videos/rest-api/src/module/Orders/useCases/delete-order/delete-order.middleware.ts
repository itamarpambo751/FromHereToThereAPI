import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import DeleteOrderDTO from "./delete-order.dto"

class Params extends DeleteOrderDTO {}

const deleteOrderMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required("´id´ é um parâmetro obrigatório.")
        })
    )
}))
export default deleteOrderMiddleware