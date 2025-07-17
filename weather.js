


    const apiKey = "3f29a2ae5d51003d7489ca94f320e547";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

    
    
    async function checkWeather(e){
        
        let city = e.previousElementSibling.value;
        let cityName = document.querySelector(".city");
        let temp = document.querySelector(".temp");
        let humidity = document.querySelector(".humd");
        let wind = document.querySelector(".wd");


        
        const response = await fetch(apiUrl + `&q=${city}`+`&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        console.log(data.main.temp);


        cityName.innerHTML = data.name;
        temp.innerHTML = data.main.temp + ' °C';
        humidity.innerHTML =  data.main.humidity + " %";
        wind.innerHTML =   data.wind.speed + " km/h";

        
       

    }

