function calculate() {
    var expression = document.getElementById("input").value;
    var result = math.evaluate(expression);
    document.getElementById("result").innerHTML =" = " + result;
    if(expression == ""){
        document.getElementById("result").innerHTML = "";
    }
  }
 