import React from 'react'

// Hooks de Router
import { useHistory, useLocation, useParams} from 'react-router'

const WeatherInformation = ({cityInformation}) => {

    //los siguientes hooks deben ser asiganados a una constante

    // History una serie de metodos para controlar el historial de la navegacion 
    const history = useHistory()
    // useLocation nos da la informacion de donde estamos parados el par actual etc
    const location = useLocation()
    //useParams es un objeto con todos los atributos de todos los objetos que tenemos de manera dinamica
    const params = useParams()

    console.log(history);
    console.log(location);
    console.log(params);

     // Funciones 
     const handleHistory =()=>{
        // si imprimimos histori veremos que es un objeto con diversas propiedades
        console.log(history); 
        history.goBack()   // goBack es una propiedad del objeto history y nos regresa a la pagina anterior de nuestra
        //app
    }

    //
    const informacion = cityInformation;
    console.log(informacion);
    return (
        <div>
            
            <button onClick ={handleHistory}>regresar</button>
        </div>
    )
}

export default WeatherInformation
