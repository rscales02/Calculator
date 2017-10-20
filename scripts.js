var display = document.getElementById('display');

function toDisplay(str){
    if (str === "c"){
      display.value = '0';
    } else if (display.value === '0'){
      display.value = str; 
    } else {
      display.value += str;
    }
  }

function backspace(){
  var value = display.value;
  var length = value.length-1;
  var newValue = value.substring(0, length);
  display.value = newValue;
  if (length === 0){
    display.value = "0";
  }
}

function square(){
  var num = display.value;
  display.value = eval(num * num);
}

function equal(){
  var answer = display.value;
  display.value = eval(answer);
}