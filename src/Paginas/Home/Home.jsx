import React,{useState} from "react";
import { useHistory } from 'react-router'

// Componentes
import WeatherForm from "../../Componentes/Home/Form/WeatherForm";
import CityInformation from "../../Componentes/Home/CityInformation";
import Loader from "../../Componentes/Custom/Loader";


const Home =()=>{
    //State
    const [cityName,setCityName ]= useState('')

    const [cityInformation, setCityInformation] = useState(null)

    const [loader, setLoader] = useState (false)

    const historia = useHistory();

    //funciones
    const handleCity =({value})=>{
        setCityName(value)  
    }

    const heandleSearchWeather = async (e) =>{
        e.preventDefault()
        setCityInformation(null)
        setLoader(true)
        const key ='d8c370645d30d5157df9e2b02e58a846'
        // const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        const repsonse = await fetch (API)
        const responseJson = await repsonse.json()
        setCityInformation(responseJson)
        console.log(responseJson);
        console.log(historia);
        setLoader(false)
    }


    return(
        <div className =''>
            <WeatherForm 
            handleCity={handleCity} 
            cityName={cityName} 
            heandleSearchWeather={heandleSearchWeather}
             />
            {
                loader && <Loader />
            }

            {
                cityInformation && <CityInformation 
                name ={cityInformation.name} 
                grados={cityInformation.main.temp}
                cityInformation ={cityInformation}/>
            }
            
        </div>
    ) 
}

export default Home