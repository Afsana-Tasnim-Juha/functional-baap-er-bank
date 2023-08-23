function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);

    return value;
}

function setElementById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;

}


document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementById('balance-total', newBalanceTotal);
})