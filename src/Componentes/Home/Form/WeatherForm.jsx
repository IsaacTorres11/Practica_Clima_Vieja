

const WeatherForm =({handleCity,cityName,heandleSearchWeather,setMostrar,mostrar})=>{
   

    return (
        <form action = '' onSubmit={(e)=>heandleSearchWeather(e)}>
            <input 
            type ='text' 
            placeholder='Name city' 
            onChange ={({target})=> handleCity(target)}
            value={cityName}/>

            <input type='submit' value ='Search !'/>
        </form>
    )
}

export default WeatherForm