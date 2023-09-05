import * as yup from "yup"
import { validateSchema } from "../../../../helpers"
import { GetAllCustomerDTO } from "./get-customer-list.dto"

class Query extends GetAllCustomerDTO {}

const getCustomerListMiddleware = validateSchema(getSchema => ({
    query: getSchema<Query>(
        yup.object().shape({
            page: yup.number().moreThan(0, "O valor para a página deve ser maior que 0.").required("A query ´page´ é obrigatória."),
			limit: yup.number().moreThan(0, "O valor para o limite de dados deve ser maior que 0.").required("A query ´limit´ é obrigatória."),
			search: yup.string()
        })
    )
}))
export default getCustomerListMiddleware