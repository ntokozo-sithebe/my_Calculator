const numberButtons = document.querySelectorAll('[data-numbOps]')       // we put the numbers and operations in 1 attribute
const operators = 
numberButtons.forEach( (btnNumbOps)=>{           // arrow function ... tartgeted each and every value on the array
    btnNumbOps.addEventListener('click',()=>{
        document.querySelector('#answer').value +=btnNumbOps.value  // we use value because we want the input to be displayed
    })
}) 






const equalButton = document.querySelector(['data-equal'])
// equalButton = addEventListener('click', displayAnswer )











/*function operationsChoice(){
}
function remove(){
}
function number(){
}
function updateNum(){
}
function display(){
}

const numberButtons = document.querySelectorAll(['data-number'])
const cancelButton = document.querySelector(['data-cancel'])
const equalButton = document.querySelector(['data-equal'])
const answer = document.querySelector(['data-equal'])
const operationButtons = document.querySelectorAll(['data-operation'])*/

