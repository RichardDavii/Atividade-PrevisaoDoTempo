async function buscar() {

    const cidade = document.getElementById('inputCidade').value
    const key = 'd0b6fe13c03788763baec0080c0463eb'

    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`


    let dados = await fetch(endPoint).then(res => res.json())

    alterar(dados)

}


function alterar(dados){

    console.log(dados)

    //Nome
    document.getElementById('nomeLugar').textContent = dados.name


    //Clima
    document.getElementById('imgClima').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

    document.getElementById('vlClima').textContent = dados.weather[0].description

    //Temperatura
    document.getElementById('temperatura').innerHTML = "Temp : "+dados.main.temp + "°C";

    //Umidade
    document.getElementById('umidade').innerHTML = "Umidade : "+dados.main.humidity + "%";
}