const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const buttonTotal = document.getElementById("totalButton");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    billValue = billInput.value;
    tipValue = tipInput.value;
    totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerHTML = "total : " + totalValue.toFixed(2);
}

buttonTotal.addEventListener("click", calculateTotal);
