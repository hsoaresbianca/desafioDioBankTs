import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (valor: number) => {
        if (this.getStatus() === true) {
            this.setBalance(this.getBalance() + valor)
            console.log(`Você realizou um empréstimo de ${valor} reais.`)
        }
    }
}