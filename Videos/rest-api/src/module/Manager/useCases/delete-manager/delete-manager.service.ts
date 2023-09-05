import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IManagerRepository from "../../Imanager.repository";
import DeleteManagerDTO from "./delete-manager.dto";

export default class DeleteManagerUseCase
implements UseCase<void | AppError> {
	constructor(
		private managerRepository: IManagerRepository
	){}

	async execute({ id }: DeleteManagerDTO): Promise<void | AppError> {
		if (!await this.managerRepository.get(id))
			return new AppError('Gerente não encontrado.', 404)
		return await this.managerRepository.delete(id)
	}
}