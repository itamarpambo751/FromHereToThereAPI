import UseCase from "../../../../base/use-case.base";
import AppError from "../../../../typeErrors/AppError.error";
import IManagerRepository from "../../Imanager.repository";
import Manager from "../../manager.module";
import GetManagerByIdDTO from "./get-manager-by-id.dto";

export default class GetManagerByIdUseCase
implements UseCase<AppError | Manager> {
	constructor(private managerRepository: IManagerRepository){}
	async execute({ id }:GetManagerByIdDTO): Promise<AppError | Manager> {
		try {
			return await this.managerRepository.get(id)
		} catch (err:any) {
			return new AppError("Gerente não encontrado.", 404)
		}
	}
}