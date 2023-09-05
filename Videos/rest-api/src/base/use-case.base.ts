export default abstract class UseCase<T> {
	abstract execute(...args:any[]):Promise<T>
}