function P1(n1, n2) {
    let answ = Number(n1) + Number(n2);
    return answ;
}

function P2(n1, n2, n3, n4) {
    let answ = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
    return answ;
}

function P3(ancho, alto) {
    let answ = Number(ancho) * Number(alto);
    return answ;
}

function P4(ancho, alto) {
    let answ = (Number(ancho) * Number(alto)) / 2;
    return answ;
}

function P5(radio) {
    let answ = Number(radio) * Number(radio) * 3.1415;
    return answ;
}

function P6(horas, sueldo) {
    let answ = Number(horas) * Number(sueldo);
    return answ;
}

function P7(ancho, alto) {
    let answ = Number(ancho) * Number(alto) * 39.3701 * 39.3701;
    return answ;
}

function P8(dolares) {
    let answ = Number(dolares) * 0.29;
    return answ;
}

function P9(AnioDeNac) {
    let yer = new Date();
    let answ = yer.getFullYear() - AnioDeNac;
    return answ;
}

function P10(nam1, ed1, nam2, ed2, nam3, ed3) {
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
    return Nmin;
}

function P11(AniosEnComp) {
    let an = parseInt(AniosEnComp);
    if (an <= 5 && an >= 1) {
        return an * 100;
    } else if (an > 5) {
        return 1000;
    } else return 0;
}


function P12(){
    let sueldo = 1500
    for (i = 0; i <= 6; i++) {
        console.log(Math.round(sueldo,2))
        sueldo = sueldo * 1.1  
      }
}