import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import DeleteCustomerDTO from "./delete-customer.dto"

class Params extends DeleteCustomerDTO {}

const deleteCustomerMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required()
        })
    )
}))
export default deleteCustomerMiddleware