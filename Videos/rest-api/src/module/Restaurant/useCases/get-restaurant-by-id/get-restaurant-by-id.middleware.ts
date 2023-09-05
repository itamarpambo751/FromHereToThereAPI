import * as yup from "yup"
import { validateSchema } from "../../../../helpers"

interface Params { id: string }

const getRestaurantByIdMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required()
        })
    )
}))
export default getRestaurantByIdMiddleware