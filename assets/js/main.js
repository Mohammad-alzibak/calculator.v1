function num(number) {
    document.getElementById("result").innerHTML += number;
}
function operator(operator) {
    document.getElementById("result").innerHTML += operator;
}
function clearMe() {
    document.getElementById("result").innerHTML = "" ;
}
function operatorEqual() {
    document.getElementById("result").innerHTML = eval (document.getElementById("result").innerHTML )
}
