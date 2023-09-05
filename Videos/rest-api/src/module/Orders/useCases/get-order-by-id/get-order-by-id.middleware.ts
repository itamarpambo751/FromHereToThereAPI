import * as yup from "yup"
import GetOrderByIdDTO from "./get-order-by-id.dto"
import { validateSchema } from "../../../../helpers"

class Params extends GetOrderByIdDTO {}

const getOrderByIdMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required('´id´ é um parâmetro obrigatório.')
        })
    )
}))
export default getOrderByIdMiddleware