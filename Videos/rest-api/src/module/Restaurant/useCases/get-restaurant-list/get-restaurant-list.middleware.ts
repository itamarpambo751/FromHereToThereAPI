import * as yup from "yup"
import { GetAllRestaurantsDTO } from "./get-restaurant-list.dto"
import { validateSchema } from "../../../../helpers"

class Query extends GetAllRestaurantsDTO {}

const getRestaurantListMiddleware = validateSchema(getSchema => ({
    query: getSchema<Query>(
        yup.object().shape({
            page: yup.number()
                .required("A query ´page´ é obrigatória.")
                .moreThan(0, "O valor para a página deve ser maior que 0."),
			limit: yup.number()
                .moreThan(0, "O valor para o limite de dados deve ser maior que 0.")
                .required("A query ´limit´ é obrigatória."),
			search: yup.string()
        })
    )
}))
export default getRestaurantListMiddleware