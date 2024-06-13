
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PlusTenAccount } from './class/PlusTenAccount'


// EXECUTANDO PEOPLE ACCOUNT:
// const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Bia', 1)
// peopleAccount.getBalance()
// peopleAccount.deposit(500)
// peopleAccount.withdraw(600)
// peopleAccount.setName('Bianca Soares')


// EXECUTANDO COMPANY ACCOUNT:
// const companyAccount: CompanyAccount = new CompanyAccount('Dio', 2)
// companyAccount.deposit(100)
// companyAccount.getBalance()
// companyAccount.getLoan(100)
// companyAccount.getBalance()


// EXECUTANDO PLUS TEN ACCOUNT:
const plusTenAccount: PlusTenAccount = new PlusTenAccount('Mary', 3)
plusTenAccount.getBalance()
plusTenAccount.deposit(100)
plusTenAccount.getBalance()