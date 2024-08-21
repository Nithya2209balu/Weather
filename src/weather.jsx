import { useState } from "react"
import "./index.css"
import axios from "axios"
import one from "./images/weather.png"
import "./image.css"

function Weather() {
    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(event) {
        setcity(event.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b982303ffaec2571ac96af589e48f8c4`)

        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }


    return (
        <div >
            <div className="image">
                <img className="background-image" src={one} alt="weather" />
            </div>

            <div className=" container border-black  rounded-md ">
                <h1 className="text-2xl font-bold font-medium text-red-500">Weather Report</h1>
                <p className=" text-white">I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className="mt-2 border-black rounded-md p-1 outline-none" />
                <button onClick={getWeather} className=" bg-black text-white p-2 rounded-md mt-2 ">Get Report</button>
                <div className="mt-2">
                    <h1 className="text-red-600 font-bold"><b className="text-white"> Weather : </b>{weather}</h1>
                    <p className="text-red-600 font-bold"><b className=" text-white">Temparature : </b>{temp}</p>
                    <p className="text-red-600 font-bold"><b className="text-white">Description :</b>{desc}</p>

                </div>

            </div>

        </div>


    )
}
export default Weather