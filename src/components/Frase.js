import React, { useState } from 'react';
import "./frase.css";
import Logo from './bblogo.png'

const Frase = () => {

    const [fraseActivo, setFraseActivo] = useState(false);
    const [frase, setFrase] = useState({
        authorBB : '',
        quoteBB : ''
    });

    const buscarFrase = async() => {
        setFraseActivo(true);
        let response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        response = await response.json();
        const {author, quote} = response[0];
        setFrase({
            authorBB : author ,
            quoteBB : quote
        })
    }

    const { authorBB, quoteBB } = frase;
    return ( 
        <div className="frase-container d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center flex-column container text-center">
                <img src={Logo} alt="logo" className="logo"/>
                <div className="mt-5 botton-buscarFrase" onClick={buscarFrase}>
                    Buscar frase
                </div>
                {
                    fraseActivo ? (
                        <div className="container-quote">
                            <div className="frase">
                                "{ quoteBB }"
                            </div>
                            <div className="author d-flex justify-content-end">
                                -{ authorBB }
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
     );
}
 
export default Frase;
