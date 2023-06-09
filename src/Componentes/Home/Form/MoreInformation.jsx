import React from 'react'

const MoreInformation = ({cityInformation}) => {
    return (
        <div>
            <h2>Humedad: {cityInformation.main.humidity}</h2>
            <h2>Presion: {cityInformation.main.pressure}</h2>
        </div>
    )
}

export default MoreInformation
