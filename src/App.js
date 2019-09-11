import React, {useEffect, useState, Fragment } from 'react'
import Formulario from './components/Formulario'
import axios from 'axios'

const App = () => {

  const [ artista, agregarArtista ]   = useState('')
  const [ letra, agregarLetra ] = useState([])
  const [info, agregarInfo] = useState({})


  const consultarAPILetra = async (busqueda) =>{
     console.log('Desde la apps : ConsultarApiLetra', busqueda)

     const { artista, cancion } = busqueda;
     //https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime
     const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
     const resultado = await axios(url);
     console.log(resultado.data.lyrics)
  }

  useEffect(
    ()=>{
        

    }
    ,
    []
  )
  return(
    <Fragment>
        <Formulario  consultarAPILetra={consultarAPILetra} />
    </Fragment>
  )
}



export default App