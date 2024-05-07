//const inputValue = document.getElementById("result");

// function setvalue(){

//     const inputValue = document.getElementById("result");
//     //console.log("OK")
    
// const number = document.querySelectorAll(".numbers").forEach((item)=> {
//     item.addEventListener("click", (item)=> {
//       console.log("OK");
//       // if (inputValue.innerText === "NaN") {
//       //   inputValue.innerText = "";
//       // }
//       // if (inputValue.innerText === "0") {
//       //   inputValue.innerText = "";
//       // }
//      inputValue.innerHTML += item.target.innerHTML.trim();
//     });
//   });

//   document.getElementById("result").innerText = inputValue;
// }


function setvalue(val){
    var v = document.getElementById('result');
    v.value += val;
}


 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('result');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }

 document.getElementById("result").addEventListener("keypress", function(event) {
  var key = event.key;
  // Check if the pressed key is not a number
  if (isNaN(key)) {
      alert("Only numbers are allowed.");
      event.preventDefault(); // Prevent the default action of keypress
  }
});