const inputValue = document.getElementById("result");

function setvalue(){

    const inputValue = document.getElementById("result");
    
const number = document.querySelectorAll("button[data-type=operand]").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.innerText === "NaN") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerHTML.trim();
    });
  });

  document.getElementById("result").innerText = inputValue;
}
// function setvalue(val){
//     var v = document.getElementById('result');
//     v.value += val;
// }


//  function Result() {
//     var num1 = document.getElementById('result').value;
//     var num2 = eval(num1);
//     document.getElementById('result').value = num2;
//  }
//  function Clear() {
//     var inp = document.getElementById('result');
//     inp.value = '0';
//  }
//  function Back() {
//     var ev = document.getElementById('result');
//     ev.value = ev.value.slice(0,-1);
//  }