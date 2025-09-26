const apikey="2be7ade7b21d37d3098d52183899fbd4"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const weather=document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(apiurl + city + "&appid=" + apikey);
var data=await response.json();
console.log(data);
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + "km/hr";
if(data.weather[0].main == "Clear"){
    weather.src="clear.png"
}
else if(data.weather[0].main=="Clouds"){
    weather.src="clouds.png"

}

else if(data.weather[0].main=="Drizzle"){
    weather.src="drizzle.png"

}

else if(data.weather[0].main=="Mist"){
    weather.src="mist.png";

}
else if(data.weather[0].main=="Rain"){
    weather.src="rain.png";

}
else if(data.weather[0].main=="Snow"){
    weather.src="snow.png";

}
document.querySelector(".weather").style.display="block"


}


const searchbox=document.querySelector(".search input")
const searchbutton=document.querySelector(".search button")
searchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

