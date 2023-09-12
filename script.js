const key = "openweatherkey"

const btn = document.querySelector('#search');
const temp = document.querySelector('.temp-value');
const cityName = document.querySelector('.city-name');
const humidity = document.querySelector('.humidity-value')
const wind = document.querySelector('.wind-value')
const png = document.querySelector('.png')



btn.addEventListener('click',async function find(){
    
    const city = document.querySelector('.search-city').value;
    if(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`
        const data = await (await fetch(url)).json();
        // const data = await res.json();

        // temp =data.main.temp
        // wind speed = data.wind.speed
        // humidity = data.main.humidity
        console.log(data.weather[0].main);

        temp.innerText= `${data.main.temp}`;
        cityName.innerText = city;
        humidity.innerText = `${data.main.humidity}%`
        wind.innerText = `${data.wind.speed}km/h`

        if(data.weather[0].main=="Rain" || data.weather[0].main=="Clouds"){
            png.src="rain.png"
        }else if(data.weather[0].main=="Haze" || data.weather[0].main=="Clear"){
            png.src="sunny.png"
        }else{
            png.src="heat.png"
        }
    }else{
        alert("Enter the city name")
    }
    
})
