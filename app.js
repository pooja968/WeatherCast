const API_KEY =  `87943a94660c46c8b08180703230810`                       
const form = document.querySelector("form") /* with help of form ,when we submit form then city name will be searched */
const search = document.querySelector("#search") 
const weather = document.querySelector("#weather")
const getWeather=async(city) =>{
   
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    const response = await fetch(url);
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
}
const showWeather =( data ) => {
    console.log(data)
    const link  = "https:" + data.current.condition.icon;
    // console.log(link)
    weather.innerHTML =`
       <div>
            <img src="${link}"alt="cloud1.png " height="80px">
        </div>
        <div>
            <h2>${data.current.temp_c}°C </h2>
            <h4>${data.current.condition.text}</h4>
        </div>
    `
}
form.addEventListener(  /*in ihe form whenever submit is done then function takes an event */
    "submit",
    function(event)
    {   console.log(search.value); /*jo v search box me user ne search kiya hoga wo dikhni chahiye*/
        event.preventDefault(); /*form have default nature when form is submitted then it start reloading but prevent default will stop the action of reloading after submission */
        getWeather(search.value);
    }
)