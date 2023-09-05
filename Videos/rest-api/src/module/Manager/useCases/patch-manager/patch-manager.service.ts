import UseCase from "../../../../base/use-case.base"
import AppError from "../../../../typeErrors/AppError.error"
import IManagerRepository from "../../Imanager.repository"
import Manager from "../../manager.module"
import PatchManagerDTO from "./patch-manager.dto"

export default class PatchManagerUseCase
implements UseCase<Manager | AppError> {
	constructor(private managerRepository: IManagerRepository){}

	async execute(data: PatchManagerDTO):
	Promise<Manager | AppError> {

		const objectFilter = Object.fromEntries(Object.entries(data).filter(([, value]) => value))

		if (await this.managerRepository.get(objectFilter.id)) {
			return await this.managerRepository.patch(objectFilter.id, data)
		}
		return new AppError("Gerente não encontrado!", 404)
	}
}