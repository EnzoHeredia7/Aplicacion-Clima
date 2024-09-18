let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'f8b89f39ffe33b41e0f14a54a0f2624e'
let difKevin = 273.15
let ciudad = 'Parana'
const traducciones = {
    "clear sky": "Cielo despejado",
    "few clouds": "Pocas nubes",
    "scattered clouds": "Nubes dispersas",
    "broken clouds": "Nubes rotas",
    "shower rain": "Lluvia ligera",
    "rain": "Lluvia",
    "thunderstorm": "Tormenta",
    "snow": "Nieve",
    "mist": "Niebla"
};


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if((ciudad)){
        fetchDatosClimas(ciudad)
    }
})

function fetchDatosClimas(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrardatosClima(data))

}

function mostrardatosClima(data){
    console.log(data);
    
const divDatosClima = document.getElementById('datosClima')
divDatosClima.innerHTML=''


const ciudadNombre = data.name
const paisNombre = data.sys.country
const temperatura = data.main.temp
const descripcion  = data.weather[0].description
const humedad = data.main.humidity
const icono = data.weather[0].icon


const descripcionTraducida = traducciones[descripcion] || descripcion;

const ciudadTitulo = document.createElement('h2')
ciudadTitulo.textContent = `${ciudadNombre} , ${paisNombre}`

const temperaturaInfo = document.createElement('p')
temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKevin)} °C, Humedad: ${humedad}%`

const iconoInfo = document.createElement('img')
iconoInfo.src= `http://openweathermap.org/img/wn/${icono}.png`

const descripcionInfo = document.createElement('p')
descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcionTraducida}`

divDatosClima.appendChild(ciudadTitulo)
divDatosClima.appendChild(temperaturaInfo)
divDatosClima.appendChild(iconoInfo)
divDatosClima.appendChild(descripcionInfo)
}



