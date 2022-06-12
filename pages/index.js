
function primeNumber() {
    var number = document.getElementById("PN").value;

    var a = number.split(",");
    var len = a.length;
    console.log(a);
    var str = "";
    var non_prime = "";
    var count = 0;
    for (var i = 0; i < len; i++) {
        count = 0;
        for (j = 2; j < parseInt(a[i]); j++) {
            if (a[i] % j == 0) {
                count++;

            }

        }
        if (count < 1) {
            str += a[i] + ",";
            document.getElementById("prime").innerHTML = "Prime :" + str;
        }
        else {
            non_prime += a[i] + ","
            document.getElementById("none-prime").innerHTML = "None-prime :" + non_prime;

        }
    }



}
