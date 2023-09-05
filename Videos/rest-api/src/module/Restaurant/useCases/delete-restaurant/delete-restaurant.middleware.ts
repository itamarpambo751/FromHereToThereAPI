import * as yup from "yup"
import DeleteRestaurantDTO from "./delete-restaurant.dto"
import { validateSchema } from "../../../../helpers"

class Params extends DeleteRestaurantDTO {}

const deleteRestaurantMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid().required()
        })
    )
}))
export default deleteRestaurantMiddleware