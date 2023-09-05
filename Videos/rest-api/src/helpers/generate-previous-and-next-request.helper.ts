import IRepository from "../base/repository.base";

type PaginationStepGeneratorProperties = {
    gatewayInterface: IRepository<any>
    page: number
    limit: number
    search: string | undefined
    _baseEntity: string
}
type PaginationStep = string | Boolean
type PaginationStepGeneratorFunction = (
    properties: PaginationStepGeneratorProperties
) => Promise<{ 
    next: PaginationStep, previous: PaginationStep
}>
export const PaginationStepGenerator: PaginationStepGeneratorFunction  = async ({ 
    gatewayInterface, page, limit, search, _baseEntity
}) => {
	const testingTheNextStep = await gatewayInterface.getAll(limit, limit * page, search)
    const urlController = _baseEntity.toLocaleLowerCase()
    return { 
        next:
            (testingTheNextStep.length > 0) && 
            `/${urlController}/list/all?page=${page + 1}&limit=${limit}`, 

        previous:
            (page > 1) && 
            `/${urlController}/list/all?page=${page - 1}&limit=${limit}`
    }
}