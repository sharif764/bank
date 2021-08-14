// handle deposite button 
document.getElementById('deposite-button').addEventListener('click',function(){
    // get the amount deposited 
    const depositeInput = document.getElementById('Deposite-input');
    const newDepositeAmount = depositeInput.value;
    // update deposite Total 

    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeAmount = (depositeTotal.innerText);
    console.log(previousDepositeAmount,newDepositeAmount);
    const newDepostieTotal = parseFloat(previousDepositeAmount)+parseFloat(newDepositeAmount);
 
    depositeTotal.innerText = newDepostieTotal;
    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =  balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositeAmount);
    balanceTotal.innerText = parseFloat(newBalanceTotal);
    // clear the deposite input field 
    depositeInput.value = '';
})
// handle withdraw event handleer 
document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawInput = document.getElementById('Withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   console.log(newWithdrawAmount);
//    set withDraw total 
const withDrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withDrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);
console.log(previousWithdrawTotal); 
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withDrawTotal.innerText = newWithdrawTotal;
// update balance 
   const balance = document.getElementById('balance-total');
   const previousBalanceText = balance.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceText);
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balance.innerText = newBalanceTotal;
// cleat withdraw input 
withdrawInput.value = '';
})