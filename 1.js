function res() {
    var n = Number(document.getElementById("n").value);
    var x = Number(document.getElementById("x").value);
    var sum = 0;
    if (x>1) {
        for (let i = 0; i < n+1; i++) {
            sum += 2*(1/((2*i+1)*x**(2*i+1)) )
        }
        document.writeln(sum);
    }
    else document.writeln("x не соответствует условию");
}