import { DioAccount } from "./DioAccount";

export class PlusTenAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (valor: number) => {
        if (this.getStatus() === true) {
            this.balance =+ (valor + 10);
            console.log(`Você depositou ${valor + 10} reais.`)
        }
    }

}