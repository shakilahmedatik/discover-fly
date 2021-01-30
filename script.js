//Update Input fields and capture ticket count.
function handleTicketChange(ticket, isIncrease) {
  const ticketCount = getInputValue(ticket);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketNewCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  document.getElementById(ticket + "-count").value = ticketNewCount;
  calculateTotal();
}

//Calculate & update total, tax & grand total price.
function calculateTotal() {
  const firstClassCount = getInputValue("firstClass");
  const economyCount = getInputValue("economy");

  const totalPrice = firstClassCount * 150 + economyCount * 100;
  document.getElementById("total-price").innerText = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText = "$" + tax;

  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

//Convert captured input values into Integer.
function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + "-count");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}
