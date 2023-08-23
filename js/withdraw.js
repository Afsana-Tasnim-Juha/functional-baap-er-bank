document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = document.getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = document.getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);


})