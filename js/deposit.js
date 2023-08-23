function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const value = parseFloat(elementValueString);
    element.value = '';
    return value;
}


document.getAnimations('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
})