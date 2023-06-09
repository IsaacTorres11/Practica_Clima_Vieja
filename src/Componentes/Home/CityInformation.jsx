import React,{useState} from 'react'

//componentes
import MoreInformation from './Form/MoreInformation'

// Hooks de Router
import { useHistory } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const CityInformation = ({name,grados,cityInformation}) => {
    
    // Uso del Hook useHoistory
    // este hook se tiene que asignar a una constante por lo regular esta se llamara history
    const history = useHistory()

    //useState
    const [mostrar,setMostrar] = useState(false)

     // Funciones 
    const renderizar = () =>{
        setMostrar(!mostrar)
        console.log(mostrar);
    }

     const handleHistory = () =>{
        // si imprimimos histori veremos que es un objeto con diversas propiedades
        setMostrar(true)
        mostrar ? console.log('cambia ruta') : console.log('no cambia')
        // history.push(`/weather/${name}`)          
    }

    return (
        <div>
            <h2>Pais: {name}</h2>
            <h2>Grados: {grados}</h2>
            <button 
                onClick={renderizar}>
            Ver mas
            </button>
            {
                // mostrar === true ? 
                // <BrowserRouter>
                // <Switch>
                //     <Route>
                //     <MoreInformation cityInformation={cityInformation}/>
                //     </Route>
                // </Switch>
                // </BrowserRouter>
                // :
                // console.log('no cambio')
            }
        </div>
    )
}

export default CityInformation


