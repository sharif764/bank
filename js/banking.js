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