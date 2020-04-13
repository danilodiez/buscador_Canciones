import {API} from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) =>{
    e.preventDefault();

    //obtener datos del formulario

    const artista = document.querySelector('#artista').value,
    cancion = document.querySelector('#cancion').value;

    if(artista==='' || cancion===''){
        UI.divMensaje.innerHTML = 'Error, todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');  
        setTimeout(()=>{
            UI.divMensaje.innerHTML = '';
            UI.divMensaje.classList.remove('error');  
        },2000);
        

    }else{
        const api = new API(artista, cancion);
        api.consultarApi()
        .then(data =>{
            if(data.respuesta.lyrics){
                //se encontro la cancion
                const letra = data.respuesta.lyrics;
                UI.divResultado.innerHTML = letra;
           
           
           
            }else{

                //no se encontro la cancion
                UI.divMensaje.innerHTML = 'Error, no se encontro la cancion';
                UI.divMensaje.classList.add('error');  
                setTimeout(()=>{
                    UI.divMensaje.innerHTML = '';
                    UI.divMensaje.classList.remove('error');  
                    UI.formularioBuscar.reset();
                },2000);
            }
        })

    }

})
