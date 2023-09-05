import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import DeleteManagerDTO from "./delete-manager.dto"

class Params extends DeleteManagerDTO {}

const deleteManagerMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required()
        })
    )
}))
export default deleteManagerMiddleware