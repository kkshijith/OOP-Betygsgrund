class Transactions{
    constructor(fromBank, toBank, toPgbg, amount){
        this.fromBank = fromBank;
        this.toBank = toBank;
        this.toPgbg = toPgbg;
        this.amount = amount;
        this.status = 'active';
    }

    run(){
        if(this.fromBank.withdraw(this.amount)){
            if(this.toPgbg == null){
                this.toBank.deposit(this.amount);
            } else {
                this.toPgbg.deposit(this.amount);
            }    
        }
    }

    rollback(){
        if(this.toPgbg == null){
           if(this.toBank.withdraw(this.amount) && this.toBank.checkStatus()){
            this.fromBank.deposit(this.amount);
           } else {
               console.log('Rollback is not possible. Balance is negative');
           }
        } else {
            if(this.toPgbg.withdraw(this.amount)){
                this.fromBank.deposit(this.amount);
               } else {
                   console.log('Rollback is not possible. Balance is negative');
               }
        }
    }

}
// test
class Test{
    
}