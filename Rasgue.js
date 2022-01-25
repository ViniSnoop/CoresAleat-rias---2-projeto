let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let quadrado = 0;

function grande() {
    for(c=0;c<=44;c++) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var divs = document.getElementsByTagName("div")[c];
        divs.setAttribute("onmouseout", `mudarcor(${c})`);
        divs.setAttribute("id", `div${c}`);
    }
}

function gerar_cor_hexadecimal() {
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

/*function mudarcor() {
    for (i=0;i<=44;i++) {
    var div = document.getElementsByTagName("div")[i]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    }
}
*/
for(i=0;i<=44; i++) {
    function mudarcor(i) {
        var div = document.getElementsByTagName("div")[i]
        div.style.backgroundColor=gerar_cor_hexadecimal()
        div.innerHTML=`${gerar_cor_hexadecimal()}`
    }
}
/*
function mudarcor1() {
    var div = document.getElementsByTagName("div")[1]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor2() {
    var div = document.getElementsByTagName("div")[2]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor3() {
    var div = document.getElementsByTagName("div")[3]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor4() {
    var div = document.getElementsByTagName("div")[4]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor5() {
    var div = document.getElementsByTagName("div")[5]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor6() {
    var div = document.getElementsByTagName("div")[6]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor7() {
    var div = document.getElementsByTagName("div")[7]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor8() {
    var div = document.getElementsByTagName("div")[8]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor9() {
    var div = document.getElementsByTagName("div")[9]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor10() {
    var div = document.getElementsByTagName("div")[10]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor11() {
    var div = document.getElementsByTagName("div")[11]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor12() {
    var div = document.getElementsByTagName("div")[12]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor13() {
    var div = document.getElementsByTagName("div")[13]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor14() {
    var div = document.getElementsByTagName("div")[14]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor15() {
    var div = document.getElementsByTagName("div")[15]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor16() {
    var div = document.getElementsByTagName("div")[16]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor17() {
    var div = document.getElementsByTagName("div")[17]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor18() {
    var div = document.getElementsByTagName("div")[18]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor19() {
    var div = document.getElementsByTagName("div")[19]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor20() {
    var div = document.getElementsByTagName("div")[20]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor21() {
    var div = document.getElementsByTagName("div")[21]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor22() {
    var div = document.getElementsByTagName("div")[22]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor23() {
    var div = document.getElementsByTagName("div")[23]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor24() {
    var div = document.getElementsByTagName("div")[24]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor25() {
    var div = document.getElementsByTagName("div")[25]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor26() {
    var div = document.getElementsByTagName("div")[26]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor27() {
    var div = document.getElementsByTagName("div")[27]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor28() {
    var div = document.getElementsByTagName("div")[28]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor29() {
    var div = document.getElementsByTagName("div")[29]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor30() {
    var div = document.getElementsByTagName("div")[30]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor31() {
    var div = document.getElementsByTagName("div")[31]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor32() {
    var div = document.getElementsByTagName("div")[32]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor33() {
    var div = document.getElementsByTagName("div")[33]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor34() {
    var div = document.getElementsByTagName("div")[34]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor35() {
    var div = document.getElementsByTagName("div")[35]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor36() {
    var div = document.getElementsByTagName("div")[36]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor37() {
    var div = document.getElementsByTagName("div")[37]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor38() {
    var div = document.getElementsByTagName("div")[38]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor39() {
    var div = document.getElementsByTagName("div")[39]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor40() {
    var div = document.getElementsByTagName("div")[40]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor41() {
    var div = document.getElementsByTagName("div")[41]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor42() {
    var div = document.getElementsByTagName("div")[42]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor43() {
    var div = document.getElementsByTagName("div")[43]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
function mudarcor44() {
    var div = document.getElementsByTagName("div")[44]
    div.style.backgroundColor=gerar_cor_hexadecimal()
    div.innerHTML=`${gerar_cor_hexadecimal()}`
}
*/