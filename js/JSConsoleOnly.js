function Welcome() {
  console.log(
    'Hola profesor \nLas preguntas han sido nombradas P1-P15 y funcionan conforme lo que solicitan en el reto. \nAdicionalmente, cada funcion tiene una forma extendida de respuesta y otra con solo el resultado, por defecto esta reducido ya que se menciono que "es como si una empresa lo estuviera usando", si desea que se lea el mensaje entero solo agregue "true" al final de los parametros'
  );
}

function P1(n1, n2, verbose = false) {
  let answ = Number(n1) + Number(n2);
  if (verbose) return "La suma de ambos numeros dara " + answ;
  else return answ;
}

function P2(n1, n2, n3, n4, verbose = false) {
  let answ = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
  if (verbose) return "El promedio de los 4 numeros es " + answ;
  else return answ;
}

function P3(ancho, alto, verbose = false) {
  let answ = Number(ancho) * Number(alto);
  if (verbose) return "El area del rectangulo es " + answ;
  else return answ;
}

function P4(ancho, alto, verbose = false) {
  let answ = (Number(ancho) * Number(alto)) / 2;
  if (verbose) return "El area del triangulo es " + answ;
  else return answ;
}

function P5(radio, verbose = false) {
  let answ = Number(radio) * Number(radio) * 3.1415;
  if (verbose) return "El area del circulo es " + answ;
  else return answ;
}

function P6(horas, sueldo, verbose = false) {
  let answ = Number(horas) * Number(sueldo);
  if (verbose) return "El sueldo semanal es " + answ;
  else return answ;
}

function P7(ancho, alto, verbose = false) {
  let answ = Number(ancho) * Number(alto) * 39.3701 * 39.3701;
  if (verbose) return "El area de la tela en pulgadas es " + answ;
  else return answ;
}

function P8(dolares, verbose = false) {
  let answ = Number(dolares) * 0.29;
  if (verbose) return "El monto en dolares es " + answ;
  else return answ;
}

function P9(AnioDeNac, verbose = false) {
  let yer = new Date();
  let answ = yer.getFullYear() - AnioDeNac;
  if (verbose) return "La edad del aplicante es " + answ;
  else return answ;
}

function P10(nam1, ed1, nam2, ed2, nam3, ed3, verbose = false) {
  let nam = [nam1, nam2, nam3];
  let ed = [ed1, ed2, ed3];
  let Nmin;
  var Emin = 9999;
  for (let i = 0; i < ed.length; i++) {
    if (ed[i] < Emin) {
      Emin = ed[i];
      Nmin = nam[i];
    }
  }
  if (verbose) return "El nombre de la persona de menor edad es " + Nmin;
  else return Nmin;
}

function P11(AniosEnComp, verbose = false) {
  let an = parseInt(AniosEnComp);
  let answ = 0;
  if (an <= 5 && an >= 1) {
    answ = an * 100;
  } else if (an > 5) {
    answ = 1000;
  } else answ = 0;
  if (verbose) return "El bono por antiguedad sera de " + answ;
  else return answ;
}

function P12(verbose = false) {
  let sueldo = 1500;
  for (i = 0; i <= 6; i++) {
    if (verbose) {
      console.log(
        "El sueldo para el año " + i + " es " + Math.round(sueldo, 2)
      );
    } else console.log(Math.round(sueldo, 2));
    sueldo = sueldo * 1.1;
  }
}

//Esta funcion asume que enviaras una lista de notas como segundo parametro
function P13(NumAlum, list, verbose = false) {
    let Ap=0
    let Des = 0
  for (i = 0; i <= NumAlum; i++) {
    if (list[i] >= 11) Ap += 1;
    else Des += 1;
  }
  if (verbose){
      console.log("El numero de aprovados es " + Ap)
      console.log("El numero de desaprovados es " + Des)
  }
  else return [Ap,Des]
}

function P14(NumFocos, verbose = false) {
    let v = parseInt(NumFocos*.30)
    let b = parseInt(NumFocos*.30)
    let r = (Number(NumFocos)-parseInt(NumFocos*.30)*2)

    if (verbose){
        console.log("El numero de focos Verdes es " + v)
        console.log("El numero de focos Blancos es " + b)
        console.log("El numero de focos Rojos es " + r)
    }
    else
    return [v,b,r]
}

function P15(edad, verbose = false) {
  if (edad + 1 >= 18) {
    if (verbose)
      return "Esta persona SI podra votar en las elecciones presidenciales del proximo año";
    else return true;
  } else if (verbose)
    return "Esta persona NO podra votar en las elecciones presidenciales del proximo año";
  else return false;
}
