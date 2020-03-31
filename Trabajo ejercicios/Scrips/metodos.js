
function par() {

    var dato;
    dato = parseFloat(document.getElementById("texto1").value);
    if (dato % 2 == 0) {
        alert("El numero " + dato + " es par");
    } else {
        alert("El numero " + dato + " no es par");
    }

}

function mayor() {
    var dato1 = parseFloat(document.getElementById("texto2").value);
    var dato2 = parseFloat(document.getElementById("texto2.1").value);
    var dato3 = parseFloat(document.getElementById("texto2.2").value);

    alert("El primer numero es: " + dato1 +
        "\nEl segundo numero es: " + dato2 +
        "\nEl tercer numero es: " + dato3 +
        "\nY el numero mayor es: " + Math.max(dato1, dato2, dato3));
}

function ordenar() {
    var dato1 = parseFloat(document.getElementById("texto3").value);
    var dato2 = parseFloat(document.getElementById("texto3.1").value);
    var dato3 = parseFloat(document.getElementById("texto3.2").value);
    var mayor = Math.max(dato1, dato2, dato3);
    var medio;
    var menor = Math.min(dato1, dato2, dato3);
    if (dato1 < mayor && dato1 > menor) {
        medio = dato1;
    } else {
        if (dato2 < mayor && dato2 > menor) {
            medio = dato2;
        } else {
            if (dato3 < mayor && dato3 > menor) {
                medio = dato3;
            }
        }
    }

    alert("El numero menor es " + menor +
        "\nEl numero del medio es " + medio +
        "\nEl numero mayor es " + mayor);

}

function multiplo2() {
    var dato1 = parseFloat(document.getElementById("texto4").value);
    var dato2 = parseFloat(document.getElementById("texto4.1").value);

    if (dato1 % dato2 == 0) {
        alert(dato2 + " es multiplo de " + dato1);
    } else {
        alert(dato2 + " No es multiplo de " + dato1);
    }
}

function bisiesto() {
    var dato1 = parseFloat(document.getElementById("texto5").value);
    if (dato1 % 4 == 0 && dato1 % 100 != 0 || dato1 % 100 == 0 && dato1 % 400 == 0) {
        alert(dato1 + " Es bisiesto");
    } else {
        alert(dato1 + " No es bisiesto");
    }
}

function nomina1() {
    var dato1 = document.getElementById("nombre").value;
    var dato2 = document.getElementById("horas").value;
    var dato3 = document.getElementById("valorh").value;
    var dato4 = document.getElementById("salario").value;

    if (dato4 < dato2 * dato3) {
        alert("Nombre :" + dato1 +
            "\nSalario mensual :" + dato2 * dato3);
    } else {
        alert("Nombre :" + dato1);

    }
}

function descuento() {
    var dato = document.getElementById("texto7").value;
    var precio = 650000;
    var descuent;
    var total;
    if (dato < 5) {
        descuent = ((dato * precio) * 10) / 100;
        total = (dato * precio) - descuent;
        alert("El monto a pagar es " + total);
    } else {
        if (dato >= 5 && dato < 10) {
            descuent = ((dato * precio) * 20) / 100;
            total = (dato * precio) - descuent;
            alert("El monto a pagar es " + total);
        } else {
            if (dato >= 10) {
                descuent = ((dato * precio) * 40) / 100;
                total = (dato * precio) - descuent;
                alert("El monto a pagar es " + total);
            }
        }
    }
}
function matricula() {
    var dato = document.getElementById("texto8").value;
    var vcreditos = document.getElementById("texto8.1").value;
    var dato2 = document.getElementById("texto8.2").value;

    var total;
    var adicion;
    var descuent;
    var sub1 = 200000;
    var sub2 = 100000;

    if (dato <= 20) {
        total = vcreditos * dato;
    } else {
        total = vcreditos * 20;
        adicion = dato - 20;
        adicion = adicion * (vcreditos * 2);
        total += adicion;
    }

    var sub1 = 200000;
    var sub2 = 100000;
    var subofi;
    if (dato2 == 1) {
        subofi = sub1;
    } else {
        subofi = sub2;
    }

    if (dato2 == 1) {
        descuent = (total * 80) / 100;
        total -= descuent;
    } else {
        if (dato2 == 2) {
            descuent = (total * 50) / 100;
            total -= descuent;
        } else {
            if (dato2 == 3) {
                descuent = (total * 30) / 100;
                total -= descuent;
            }
        }
    }

    alert("Numero de creditos: " + dato +
        "\nValor creditos : " + vcreditos +
        "\nEstrato estudiante :" + dato2 +
        "\nCosto matricula : " + total +
        "\nValor subsidio :" + subofi);



}


function envios(params) {
    var peso = document.getElementById("texto9").value;
    var valorm = document.getElementById("texto9.1").value;
    var dia = document.getElementById("texto9.2").value;
    var tipop = document.getElementById("texto9.3").value;

    var tarifa;
    var adicional;
    var auxpeso = peso;
    var descuent;
    var descuentP;
    var aplica;
    var promocion;
    var total;

    if (peso < 100) {
        tarifa = 20000;
    } else {
        if (peso >= 100 && peso < 150) {
            tarifa = 25000;
        } else {
            if (peso > 150 && peso <= 200) {
                tarifa = 30000;
            } else {
                if (peso > 200 && peso < 210) {
                    tarifa = 35000
                } else {
                    if (peso >= 210) {
                        tarifa = 35000;
                        auxpeso = auxpeso - 200;
                        adicional = auxpeso / 10;
                        adicional = adicional * 2000;
                        tarifa = tarifa + adicional;
                        total = tarifa;
                    }
                }
            }
        }
    }

    if (valorm >= 300000 && valorm <= 600000) {
        descuent = (tarifa * 10) / 100;
    } else {
        if (valorm > 600000 && valorm < 1000000) {
            descuent = (tarifa * 20) / 100;
        } else {
            if (valorm >= 1000000) {
                descuent = (tarifa * 30) / 100;
            }
        }
    }

    if (dia == "s" && tipop == "t") {
        total /= 2;
        aplica = true;
    } else {
        if (tipop == "e" && valorm > 1000000) {
            descuentP = (tarifa * 60) / 100;
            total -= descuentP;
            promocion = descuentP;
            aplica = true;
        } else {
            aplica = false;
        }
    }

    if (aplica == false) {
        promocion = descuent;
        total -= descuent;
    }

    alert("Tarifa :" + tarifa +
        "\nPromocion : " + promocion +
        "\ntotal a pagar : " + total);


}


function alimentos() {
    var costo = parseFloat(document.getElementById("texto10").value);
    var tipoa = document.getElementById("texto10.1").value;
    var tipoc = document.getElementById("texto10.2").value;
    var periodoc = parseFloat(document.getElementById("texto10.3").value);
    var periodoa = parseFloat(document.getElementById("texto10.4").value);
    var volumen = parseFloat(document.getElementById("texto10.5").value);
    var medioal = document.getElementById("texto10.6").value;

    var valorVenta = 0;
    var adicion = 0;
    var valma = 0;
    var costoEx = 0;
    var porcentajeD = 0;


    if (tipoa = "n") {
        adicion = (costo * 20) / 100
        valorVenta = costo + adicion;

    } else {
        adicion = (costo * 40) / 100
        valorVenta = costo + adicion;
    }


    if (tipoa == "p") {
        if (tipoc == "f" && periodoc < 10) {
            valma = (costo * 5) / 100;
        } else {
            if (tipoc == "f" && periodoc >= 10) {
                valma = (costo * 10) / 100;
            } else {
                if (tipoc == "a" && periodoc < 20) {
                    valma = (costo * 3) / 100;
                } else {
                    if (tipoc == "a" && periodoc > 20) {
                        valma = (costo * 10) / 100;
                    } else {
                        if (tipoc == "a" && periodoc == 20) {
                            valma = (costo * 5) / 100;
                        }
                    }
                }
            }
        }
    } else {
        if (volumen >= 50) {
            valma = (costo * 10) / 100;
        } else {
            valma = (costo * 20) / 100;
        }
    }



    if (tipoa == "p") {
        if (tipoc == "f" && medioal == "n") {
            costoEx = valma * 2;
        } else {
            if (tipoc == "f" && medioal == "c") {
                costoEx = valma;
            }
        }
    } else {
        if (medioal == "e") {
            costoEx = (valma * 5) / 100;
        } else {
            if (medioal == "g") {
                costoEx = (valma * 7) / 100;
            }
        }
    }

    if (periodoa < 30) {
        porcentajeD = 0.95;

    } else {
        if (periodoa >= 30) {
            porcentajeD = 0.85;
        }
    }

    var valorPro;
    valorPro = (costo + valma + costoEx) * porcentajeD;

    alert("costo almacenamiento : " + valma +
        "\nporcentaje de depreciacion : " + porcentajeD +
        "\ncosto exhibicion : " + costoEx +
        "\nValor producnto : " + valorPro +
        "\nvalor venta : " + valorVenta)


}


function promedio() {
    var dato = document.getElementById("texto12").value;
    var i;
    var suma = 0;
    var promedio = 0;
    for (i = 0; i <= dato; i++) {
        document.write(i + " ")
        suma += i
    }
    promedio = suma / dato

    document.write("La suma es: " + suma + " \nEl promedio es: " + promedio)


}

function factorial() {
    var dato = document.getElementById("texto13").value;
    var total = 1;
    for (i = 1; i <= dato; i++) {
        total = total * i;
    }
    alert(total);
}

function teylor() {
    var dato = document.getElementById("texto14").value;
    var dato1 = document.getElementById("texto14.1").value;
    var suma = 0;
    var termino;

    for (var i = 0; i < dato; i++) {
        termino = Math.pow(dato1, i) / factoriales(i)
        suma += termino;
    }

    alert("f(x) = " + suma)

}


function teylor2() {
    var dato = document.getElementById("texto15").value;
    var dato1 = document.getElementById("texto15.1").value;
    var suma = 0;
    var termino;
    var signo = 1;
    for (var i = 0; i < dato; i++) {
        termino = Math.pow(dato1, i) / factoriales(i) * signo;
        signo *= -1;
        suma += termino;
    }
    alert("f(x) = " + suma)
}

function factoriales(num) {
    var factorial = 1.0;
    for (var i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function cuadratica() {
    var a = document.getElementById("texto16").value;
    var b = document.getElementById("texto16.1").value;
    var c = document.getElementById("texto16.2").value;

    var positivo = 0
    var negativo = 0

    positivo = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a);
    negativo = (-b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a);

    alert("Positivo = " + positivo +
        "\nNegativo = " + negativo)
}

function fibonacci() {
    var numero = document.getElementById("texto17").value;
    var sumaTotal = 1;
    var condicion = true;
    var a = 0;
    var b = 1;
    var c = 0;
    var i = 3;

    if (numero == 1) {
        c = 0;
        sumaTotal = 0;
        document.write("0" + ", ");
    }
    else if (numero == 2) {
        c = 1;
        sumaTotal = 1;
        document.write("1" + ", ");
    }
    else {
        while (i <= numero) {
            if (condicion) {
                document.write("0" + ", ");
                document.write("1" + ", ");
                condicion = false;
            }
            c = a + b;
            document.write(c + ",");
            sumaTotal += c;
            a = b;
            b = c;
            i++;
        }
    }
    alert("\ny el término en la posición " + numero + " es "
        + c + " y su suma hasta esa posición es : " + sumaTotal)

}
function fibonacci2() {


    var termino = document.getElementById("texto18").value;


    var a = 0, b = 1, c = 0, s = 0, r = 0;

    for (var i = 0; i < termino; i++) {
        if (c < 2) {
            document.write(i + "\t");
            c = i;
            r += c;
        } else {
            s = b + a + c;
            document.write(s + "\t");
            a = b;
            b = c;
            c = s;
            r += s;
        }
    }

    alert("\nLa sumatoria es:" + " " + r)
}

function primo() {
    let valor = parseInt(document.getElementById("texto19").value);
    if (esPrimo(valor)) {
        document.getElementById("resultado").innerHTML = "El numero " + valor + " SI es Primo";
    } else {
        document.getElementById("resultado").innerHTML = "El numero " + valor + " NO es Primo";
    }
}

function esPrimo(num) {
    if (num <= 1 || num % 1) {
        return false;
    }
    let m = Math.sqrt(num);
    for (let i = 2; i <= m; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


function primo2() {
    var n = parseInt(document.getElementById("texto20").value);
    var aux = 1, s = 0;
    for (var i = 1; i <= n || aux <= n; i++) {
        esPrimo(i);
        if (esPrimo(i)) {
            document.write(i + "\t");
            aux++;
            s += i;
        }
    }

    alert("\nLa suma es: " + s+"\nEl promedio es: " + (s / n))

}





