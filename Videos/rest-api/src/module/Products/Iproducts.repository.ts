import IRepository from "../../base/repository.base";
import Product from "./products.module";

export default abstract class IProductRepository extends IRepository<Product> {
	abstract getAll(take:number, skip:number, search?: string): Promise<Product[]>
}