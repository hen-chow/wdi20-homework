// # JavaScript Bank
//
// In this homework, youll create a basic `bank` in Javascript.
// The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owners name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have
// your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as
// expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


var bank = {
  account: [
    {name: 'Rich Bastard', balance: 1200000},
    {name: 'Poor AsHell', balance: 30},
    {name: 'Petr Subotnik', balance: 1}
  ],

  addAccount: function(clientName,newBalance){
    var newAccount = {name: clientName, balance: newBalance};
    this.account.push(newAccount);
  },

  totalBalanceInBank: function() {
    var totalBalance = 0;
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      totalBalance += account.balance;
    }
    return totalBalance;
  },

  depositMoney: function( clientName, depositAmount ){
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      if (account.name === clientName) {
        account.balance += depositAmount;
        console.log("new account balance of" + account.name + ' is $' + account.balance);
        return account.balance;
      }
    }
  }, // end depositMoney()

  withdrawMoney: function( clientName, withdrawAmount ){
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      if (account.name === clientName) {
        if (account.balance < withdrawAmount) {
          console.log('You dont have enough money in your account');
        } else {
          account.balance -= withdrawAmount;
          console.log('The remaining balance of' + account.name + ' is $' +account.balance);
          return account.balance;
        }
      }
    }
  },

  transferMoney: function (clientName1, clientName2, transferedAmount) {
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      if (account.name === clientName1 && clientName2) {
      (account.balance.clientName1 -= transferedAmount) & (account.balance.clientName2 += transferedAmount);
        console.log('An amount of ' + transferedAmount + ' has been transfered from ' + clientName1 + ' to ' + clientName2);
        return console.log(account.balance.clientName1, account.balance.clientName2);
      }
    }
  }
};

console.log( 'The total balance in the bank is: $' + bank.totalBalanceInBank() );

+  transfer: function (acc1, acc2, amount) {
 +    if (bank.withdraw(acc1, amount)) {
 +      bank.deposit(acc2, amount);
 +    }
 +  }
 +};
