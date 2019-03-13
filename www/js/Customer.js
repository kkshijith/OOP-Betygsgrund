class Customer  {
    constructor(fname, lname, pnr){
        this.fname = fname;
        this.lname = lname;
        this.username = 'JamesBond';
        this.password = '007'
        this.pnr = pnr;
        this.adress = 'bbbbbbb';
        this.email = 'jjjjjjjj';
        this.phone = '33444444';
        this.accounts = [];
        this.status = true;
    }

    createAccount(type){
        //Skapa transactions, savings and  credit card accounts
        if(type === 1){
            // trans account
            let account = new TransactionsAccount('transkonto', this.pnr, 0);
            this.accounts.push(account);
        } else if (type === 2){
            // Savings account
            let account = new SavingsAccount('savingskonto', this.pnr, 0);
            this.accounts.push(account);
        } else if (type === 3){
            //Credit Card konto
            let account = new CreditCardAccount('creditcard', this.pnr, 50000);
            this.accounts.push(account);
        }
    }

    deleteAccount(accountObj){
        for(let x of this.accounts){
            if(x == accountObj){
                this.accounts.splice(x, 1);
            }
        }
    }

}