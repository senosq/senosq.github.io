document.addEventListener("DOMContentLoaded",function(){
const buttonForModalWindow = document.getElementById("btnForModalWindow");
const modalWindow = document.getElementById("modWindow")
const numberInput = document.getElementById("leavingAdult");
const minusBtn = document.getElementById("minusButton");
const plusBtn = document.getElementById("lastBtn");
const numberInput2 = document.getElementById("leavingChildren");
const minusBtnCd = document.getElementById("minusButtonCd");
const plusBtnCd = document.getElementById("plusButtonCd");

plusBtn.addEventListener("click",function(){
    let value = parseInt(numberInput.value);
    if(value<=100){
    numberInput.value = value+1;
    }
});

minusBtn.addEventListener("click",function(){
    let value = parseInt(numberInput.value);
    if(value>1){
    numberInput.value = value-1;
    }
});

plusBtnCd.addEventListener("click",function(){
    let value = parseInt(numberInput2.value);
    if(value<=100){
    numberInput2.value = value+1;
    }
});

minusBtnCd.addEventListener("click",function(){
    let value = parseInt(numberInput2.value);
    if(value>0){
    numberInput2.value = value-1;
    }
});
});