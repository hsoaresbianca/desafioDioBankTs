export abstract class DioAccount {
    
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    getBalance(): number {
        return this.balance
    }

    setBalance(newBalance: number): void {
        this.balance = newBalance
    }

    getStatus(): Boolean {
        return this.status
    }

    setStatus(newStatus: boolean): void {
        this.status = newStatus
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
            console.log(`Saque não realizado! Saldo insuficiente.`)
        }
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 
        throw new Error('Conta inválida!')
    }

}