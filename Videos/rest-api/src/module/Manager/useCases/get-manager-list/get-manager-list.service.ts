import UseCase from "../../../../base/use-case.base";
import { GeneratePreviousAndNextRequest } from "../../../../helpers";
import IManagerRepository from "../../Imanager.repository";
import Manager from "../../manager.module";
import { GetAllManagerDTO } from "./get-manager-list.dto";

export default class GetManagerListUseCase
implements UseCase<{ next?: string | Boolean, previous?: string | Boolean, result: Manager[] }> {
	constructor(private managerRespository: IManagerRepository) {}
	async execute({ page, limit, search }:GetAllManagerDTO): 
	Promise<{ next?: string | Boolean, previous?: string | Boolean, result: Manager[] }> {
		const result = await this.managerRespository.getAll(limit, limit * (page - 1), search)
		const ensureAction = await GeneratePreviousAndNextRequest({
			gatewayInterface: this.managerRespository,
			_baseEntity: 'manager', page, limit, search
		})
		return { ...ensureAction, result }
	}
}