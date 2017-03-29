// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object as its only argument.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the items in the shopping cart. Example:
//
// // Input
// var cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36",
//   Acorn: "0.35"
// };
//
// // Output
// cashRegister(cartForParty); // 60.90


var cartForParty = {
      banana: "1.25",
      handkerchief: ".99",
      Tshirt: "25.01",
      apple: "0.60",
      nalgene: "10.34",
      proteinShake: "22.36",
      Acorn: "0.35"
    };

var cashRegister = function(cart){
  var grandTotal = 0.0;
  var keys = object.keys ( cart );

for(key in cart){
  var price = parsetfloat ( cart[key] );
  grandTotal += price

}


// for (var i = 0; i < keys.length; i++) {
//
//   var key = keys[i];
//   var price = parsetfloat ( cart[key] );
//   grandTotal += price

}
  return grandTotal.toFixed(2);

};


console.log( cashRegister(cartForParty) );




//   var totalPrice = (name){
//     var addPrices = 0;
//     for (var i = 0; i < cartForParty.length; i++) {
//     totalPrice += addprices + 0;
//     }
//   }
//
// };
