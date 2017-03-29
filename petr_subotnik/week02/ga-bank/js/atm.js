// Summary
//
// This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.
// Objectives:
//
// DOM selection, appending, removal, updating
// Specification:
//
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?


// +$(document).ready(function(){                                      VALUE!!!!!!
// +  $("#button1").on("click", function(){
// +    alert($("#input1").val());
// +  })
// +});



var bank = {
  checkingBalance: 0,
  savingsBalance: 0,
};


$(document).ready(function(){

var updateUI = function () {
  $("#savings-balance").html("$" + bank.savingsBalance);
  $("#checking-balance").html("$" + bank.checkingBalance);

  if (bank.checkingBalance > 0) {
    $("#checking-balance").css({"background-color": "#E3E3E3"});
  }else{
    $('#checking-balance').css({"background-color": "red"});
  }

  if (bank.savingsBalance > 0) {
    $("#savings-balance").css({"background-color": "#E3E3E3"});
  }else{
    $('#savings-balance').css({"background-color": "red"});
  }
};

var depositMoneyChecking = function () {

  var amountIntoChecking = $("#checking-amount").val();              //   or parseInt($("#checking-amount").val());
                                              //parseInt(string into integer) & dont forget quotes!//$("......")!!!
  bank.checkingBalance = bank.checkingBalance + parseInt(amountIntoChecking);

  if (bank.checkingBalance > 0) {
    $("#checking-balance").css({"background-color": "#E3E3E3"});
  }else{
    $('#checking-balance').css({"background-color": "red"});
  }

  //how do you display the balance(integer) .html!!!!!!
  $("#checking-balance").html("$" + bank.checkingBalance)

};
var withdrawMoneyChecking = function (){

  debugger;

  var amountOutOfChecking = parseInt( $("#checking-amount").val() );

  var totalBalance = bank.checkingBalance + bank.savingsBalance;

  // bank.checkingBalance = bank.checkingBalance - amountOutOfChecking;


  if (bank.checkingBalance < amountOutOfChecking) {

     bank.checkingBalance -= amountOutOfChecking;

  }else if(amountOutOfChecking <= totalBalance) {

    var remainder = amountOutOfChecking - bank.checkingBalance;
    bank.checkingBalance = 0;
    bank.savingsBalance -= remainder;

  }else {
    alert("insufficient funds");
  }

  updateUI();
};




var depositMoneySavings = function () {

  var amountIntoSavings = parseInt($("#savings-amount").val());

  bank.savingsBalance = bank.savingsBalance + amountIntoSavings;

  if (bank.savingsBalance > 0) {
    $("#savings-balance").css({"background-color": "#E3E3E3"});
  }else{
    $('#savings-balance').css({"background-color": "red"});
  }

  $("#savings-balance").html("$" + bank.savingsBalance)

};

var withdrawMoneySavings = function (){

  var amountOutOfSavings = $("#savings-amount").val();


  if (amountOutOfSavings > bank.savingsBalance) {
    alert("insufficient funds");
  } else {
    bank.savingsBalance = bank.savingsBalance - parseInt(amountOutOfSavings);
  }


  if (bank.savingsBalance > 0) {
    $("#savings-balance").css({"background-color": "#E3E3E3"});
  }else{
    $('#savings-balance').css({"background-color": "red"});
  }

  $("#savings-balance").html("$" + bank.savingsBalance)
};

var bothAccBalance = bank.checkingBalance + bank.savingsBalance;

$("#checking-deposit").on('click', depositMoneyChecking);
$("#checking-withdraw").on('click', withdrawMoneyChecking);
$("#savings-deposit").on('click', depositMoneySavings);
$("#savings-withdraw").on('click', withdrawMoneySavings);
});
