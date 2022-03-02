
import React, {useState, useEffect} from 'react';
import Button from '../../Components/Button/Button';

import './Home.css';

const Home = () => {

    //1-Hooks (equivalen al estado en los componentes de clase)


    //3-useEffect

    useEffect(()=>{
        //Este useEffect, sólo se ejecuta la primera vez que
        //se monta el componente. Se diferencia por el argumento 
        //de array vacio que hemos puesto

    },[]);

    useEffect(()=>{
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.

        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.


    });


    //2-Render (lo que pinta en pantalla)
    return(
        <div className='designHome'>
            <Button destino={"Profile"} url={"/profile"}/>
        </div>
    );

};


export default Home;