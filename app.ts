import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusTenAccount } from './class/PlusTenAccount'


// EXECUTANDO COMPANY ACCOUNT:
const companyAccount: CompanyAccount = new CompanyAccount('Dio', 2)
console.log(companyAccount)
companyAccount.getLoan(1500)


// EXECUTANDO PEOPLE ACCOUNT:
const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Bia', 1)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(200)
peopleAccount.withdraw(50)


// // EXECUTANDO PLUS TEN ACCOUNT:
const plusTenAccount: PlusTenAccount = new PlusTenAccount('Mary', 3)
console.log(plusTenAccount)
plusTenAccount.deposit(100)