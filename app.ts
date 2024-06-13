
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PlusTenAccount } from './class/PlusTenAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Bia', 1)
// peopleAccount.getBalance()
// peopleAccount.deposit(500)
// peopleAccount.withdraw(600)
// peopleAccount.setName('Bianca Soares')


// const companyAccount: CompanyAccount = new CompanyAccount('Dio', 2)
// companyAccount.deposit(100)
// companyAccount.getBalance()
// companyAccount.getLoan(100)
// companyAccount.getBalance()

const plusTenAccount: PlusTenAccount = new PlusTenAccount('Mary', 27)
plusTenAccount.getBalance()
plusTenAccount.deposit(100)
plusTenAccount.getBalance()