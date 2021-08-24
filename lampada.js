"use strict"

function botoesligaDesliga(ligarEstado, desligarEstado){
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
}

function lampadaQuebrada(){
    return (document.getElementById("lampada").src.indexOf("quebrada") !== -1)
}

function ligarLampada(){
    const lampada = document.getElementById("lampada")

    if(!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botoesligaDesliga(true, false)
    }
}

function desligarLampada(){
    const lampada = document.getElementById("lampada")

    if(!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesligaDesliga(false, true)
    }
}

function quebrarLampada(){
    const lampada = document.getElementById("lampada")

    lampada.src = "img/quebrada.jpg"
    botoesligaDesliga(true, true)
}

// Eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)

document.getElementById("desligar").addEventListener("click", desligarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada").addEventListener("mouseover", ligarLampada)

document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)