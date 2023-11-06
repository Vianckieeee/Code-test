/*
  conditional statement syntax:
  condition ? expression_if_true : expression_if_false

  */ 

  let price = 100;
  let shippingCost = price > 50 ? 0 : 5;
  console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

  // 
  let start = confirm("Start?");
  start ? alert("Here we go!") : console.log("Aborted");

  /*
  or 
  let start = confirm("Start?");
  let message = start ? "Here we go!" "Aborted";
  alert(message);
  */ 
