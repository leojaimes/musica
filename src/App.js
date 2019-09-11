import React, {useEffect, useState, Fragment } from 'react'
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'

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

     agregarLetra(resultado.data.lyrics)
     agregarArtista(artista)
     
  }


  const consultarAPIInfo = async () => {
      if(artista){
        const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
        const resultado = await axios(url);
        if(resultado.data.artists  ){
            agregarInfo(resultado.data.artists[0]);
        }
        
        // console.log(info);
      }
  }


  useEffect(
    ()=>{
       consultarAPIInfo()
       console.log('hey agregaste un artista') 

    }
    ,
    [artista]
  )
  return(
    <Fragment>
        <Formulario  consultarAPILetra={consultarAPILetra} />

        <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                  <Informacion  
                     info={info}
                  />
              </div>
              <div className="col-md-6">
                  <Cancion
                     letra={letra}
                  
                  />
              </div>
          
            </div>
        </div>

    </Fragment>
  )
}



export default App