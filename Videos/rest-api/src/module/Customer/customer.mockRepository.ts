import ICustomerRepository from "./Icustomer.repository"
import { uuid } from "uuidv4"
import Customer from "./customer.module"

export default class CustomerMockRepository
implements ICustomerRepository {
    customer: Customer[]
    constructor () {
        this.customer = []
    }
    async save(param: Customer): 
    Promise<Customer> {
        this.customer.push({...param, id: uuid()})
        return this.customer[this.customer.length - 1]
    }
    async get(id: string): 
    Promise<Customer> {
        const customer = this.customer.find(c => c.id === id)
        if (!customer) throw new Error("any_error")
        return customer
    }
    async getByPhone(phone: number): 
    Promise<Customer> {
        const customer = this.customer.find(c => c.phone_number === phone)
        if (!customer) throw new Error("any_error")
        return customer
    }
    async getAll(take: number, skip: number, search?: string | undefined): 
    Promise<Customer[]> {
        return this.customer.filter((customer, index) => {
            const condiction = index >= ((skip / take) - 1) * take && index < take * (skip / take)

            if (condiction && !search) return customer

            else if (search) {
                if (condiction && customer.user_name.includes(search) 
                    || customer.phone_number.toString().includes(search)) return customer
            }
        })
    }
    async getByUserName(email: string): 
    Promise<Customer> {
        const customer = this.customer.find(c => c.user_name === email)
        if (!customer) throw new Error("any_error")
        return customer
    }
    async patch(id: string, param: Partial<Customer>): 
    Promise<Customer> {
        const customer = this.customer.find(c => c.id === id)

        if (!customer) throw new Error("any_error")

        const properties = Object.getOwnPropertyNames(param)

        properties.forEach(property => {
            customer[property] = param[property]
        })
            
        return customer
    }
    async delete(id: string): 
    Promise<void> {}
}