import * as yup from "yup"
import GetCustomerByIdDTO from "./get-customer-by-id.dto"
import { validateSchema } from "../../../../helpers"

class Params extends GetCustomerByIdDTO {}

const getCustomerByIdMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required()
        })
    )
}))
export default getCustomerByIdMiddleware