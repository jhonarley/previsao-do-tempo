let key = "aa4651314bb3e30ea4fbee0f9dba9004"
function colocarNaTela(dados){
console.log(dados)
document.querySelector(".local").innerHTML = "Tempo em" + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".description").innerHTML = dados.weather[0].description
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
async function buscarCity(local){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        local +
         "&appid="+
         key +
         "&lang=pt_br" +
         "&units=metric"
        )
        .then(resposta => resposta.json())
        colocarNaTela(dados)
  
}

function cliqueiNoBotao() {
let local = document.querySelector(".input-city").value

buscarCity(local)
}