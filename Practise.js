const apikey="2be7ade7b21d37d3098d52183899fbd4"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const image=document.querySelector(".weatherupdate img")
const weather=document.querySelector(".weatherupdate")
async function checkweather(city){
    const response=await fetch(apiurl + city + "&appid=" + apikey);
   var data=await response.json();
    console.log(data);
    document.querySelector(".humidtext").innerHTML=data.main.humidity + "%";
    document.querySelector(".temp h1").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".windtext").innerHTML=data.wind.speed + "km/hr";
    document.querySelector(".cityname").innerHTML=data.name;
    if(data.weather[0].main == "Clouds"){
        image.src="clouds.png";
    }
    else if(data.weather[0].main=="Mist"){
        image.src="mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        image.src="drizzle.png"
    }
    else if(data.weather[0].main=="Clear"){
        image.src="clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        image.src="rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        image.src="snow.png"
    }
    weather.style.display="block"

}
const searchbox=document.querySelector(".searchbox")
const searchbtn=document.querySelector(".searchbtn")
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})