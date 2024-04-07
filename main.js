document.addEventListener('DOMContentLoaded',()=>{
 const totalBillAmountInput = document.querySelector('#totalBillAmount');
 const tipPercentInput = document.querySelector('#tipPercent');
 const button = document.querySelector('button');
 const tipAmountDisplay = document.querySelector('#tipAmount');
 button.addEventListener('click',()=>{
   const totalBillAmount = parseFloat(totalBillAmountInput.value);
   const tipPercent = parseFloat(tipPercentInput.value);
   const finalTipAmount = calculateTip(totalBillAmount,tipPercent);
   tipAmountDisplay.textContent = `The total tip amount is $${finalTipAmount.toFixed(2)}`;
 });

 function calculateTip(totalBillAmount,tipPercent){
   const tipAmount = totalBillAmount*(tipPercent/100);
   return tipAmount;
 }
});