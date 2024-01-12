let key = "aa4651314bb3e30ea4fbee0f9dba9004"
function colocarNaTela(dados){
console.log(dados)
document.querySelector(".city").innerHTML = "Tempo em" + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".city").innerHTML = dados.weather[0].description
document.querySelector(".icone").scr = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
async function buscarCity(city){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        city +
         "&appid="+
         key +
         "&lang=pt_br" +
         "&unists=metric"
        )
        .then(resposta => resposta.json())
        colocarNaTela(dados)
  
}

function cliqueiNoBotao() {
let city = document.querySelector(".input-city").value

buscarCity(city)
}