function myFunction() {
    var greeting = "Enter A Number!";
    var enter = prompt(greeting, 20);
    var total = 0;
    for (var num = 1; num < 20; num++) {
    total += num;
}
document.getElementById("demo").innerHTML = total;
}
