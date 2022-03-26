import axios from "axios";
import { useState, useEffect } from "react";
import { Inicio, ContainerFilmes, Poster } from "./style";
import {Link} from "react-router-dom";
import Titulo from "../Titulo/index";

export default function ContainerInicio(){
    const [filmes, setFilmes] = useState([]);
    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {setFilmes(response.data)})
    },[]);

    return (
        <Inicio>
            <Titulo texto="Selecione o filme" sucesso={false}/>
            <ContainerFilmes>
                {filmes.map(({id:idFilme, title, posterURL}, i) => (
                    <Link to={`/sessoes/${idFilme}`}>
                        <Poster id={idFilme} key={i}>
                            <img src={posterURL} alt={title}/>
                        </Poster>
                    </Link>
                ))}
            </ContainerFilmes>
        </Inicio>
    );
}