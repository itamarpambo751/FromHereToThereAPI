import { Response } from "express";
import Controller from "../../../../base/controller.base"
import GetOrdersByDateUseCase from "./get-by-date.service";

export default class GetOrdersByDateController 
implements Controller {
    constructor(private getOrdersByDateUseCase: GetOrdersByDateUseCase) {}
    async handle(_:any, response: Response): 
    Promise<Response> {
        return response.status(200).json({
            result: await this.getOrdersByDateUseCase.execute()
        })
    }
}