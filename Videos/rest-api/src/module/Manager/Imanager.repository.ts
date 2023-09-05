import IRepository from "../../base/repository.base";
import Manager from "./manager.module";

export default abstract class IManagerRepository extends IRepository<Manager> {
	abstract getByEmail(email: string): Promise<Manager>
	abstract getByPhone(phone: number): Promise<Manager>
	abstract getAll(take:number, skip:number, search?: string): Promise<Manager[]>
}