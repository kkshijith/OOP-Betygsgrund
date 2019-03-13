class BankAccount {
    constructor(name, customer_pnr,  init_balance) {
      this.name = name;
      this.customer_pnr = customer_pnr;
      this.balance = init_balance;
      this.status = true;
      }
    
    //  Make a deposit of a specified amount
    deposit(amount) {
         this.balance += amount;            
    }
    
    //check balance
    check(amount){
        if( amount > this.balance){
            return false;		// unsuccessful
      } else {
            return true;
      } 
    }
    
    //     Make a withdrawal of a specified amount.
    //     Return true if this was possible, false otherwise. 
    withdraw(amount) {
      if( this.check(amount) && this.checkStatus()){
            this.balance -= amount;
            return true;  
      } else {
            console.log('Transaction failed because the Balance is negative') ;
            return false;   
      }
    }
    
    // Print a statement for the account.
    statement() {
      console.log("Balance in account number " + this.number + " is " + this.balance);
      return this.balance;
      }
    
    //Change the account name
    changeName(newName){
        this.name = newName;
    }
    
    //Check accounf status 
    checkStatus(){
        return this.status;
    }
    
    //Change inactive status
    changeStatus(){
        this.status = false;
    }
    
    // Close the account.
    close()  {
      this.status = false;
     }
    
    // Reopen the account. 
    reopen(){
        this.status = true;
        }
    }
    
    
class SavingsAccount extends BankAccount{
    constructor(name, customer_pnr,  init_balance){
        super(name, customer_pnr,  init_balance);
        this.number = 'SE000' + Math.round(Math.random()*10000 + 1);
        this.iban = 'IBAN' + this.number;
    }
}  

class CreditCardAccount extends BankAccount{
    constructor(name, customer_pnr,  init_balance){
        super(name, customer_pnr,  init_balance);
        this.number = 'SE000' + Math.round(Math.random()*10000 + 1);
        this.iban = 'IBAN' + this.number;
        this.cardAccount = true;
        this.cardNumber = 'XXX';
    }
}  

class TransactionsAccount extends BankAccount{
    constructor(name, customer_pnr,  init_balance){
        super(name, customer_pnr,  init_balance);
        this.number = 'SE000' + Math.round(Math.random()*100000000 + 1);
        this.iban = 'IBAN' + this.number;
        this.autoGiro = false;
        this.cardAccount = false;
        this.cardNumber = 'XXX';
    }

    //Check CardAccount
getCardAccount(){
    return this.cardAccount;
}

//Set CardAccount
setCardAccount(cardStatus){
    this.cardAccount = cardStatus;
}

//Get Card Number
getCardNumber(){
    return this.cardNumber;
}

//Set Card Number
setCardNumber(cardNumber){
    this.cardNumber = cardNumber;
}

//Check AutoGiro status
getAutogiro(){
    return this.autoGiro;
}

//Set AutoGiro
setAutoGiro(autoGiro){
    this.autoGiro = autoGiro;
}
}

