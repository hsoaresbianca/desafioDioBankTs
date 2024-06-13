export abstract class DioAccount {
    
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Novo nome salvo!')
    }

    getName = (): string => {
        return this.name
    }

    getStatus(): Boolean {
        return this.status
    }

    setStatus(newStatus: boolean): void {
        this.status = newStatus
    }

    getBalance(): void {
        return console.log(this.balance)
    }

    deposit = (valor: number): void => {
        if (this.validateStatus()) {
            this.balance += valor;
            console.log(`Você depositou ${valor} reais.`)
        }
    }

    withdraw = (valor: number): void => {
        if (this.status === true && this.balance >= valor) {
            this.balance -= valor;
            console.log(`Você sacou ${valor} reais.`)
        } else {
            console.log(`Saque não realizado`)
        }
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 
        throw new Error('Conta inválida!')
    }

}