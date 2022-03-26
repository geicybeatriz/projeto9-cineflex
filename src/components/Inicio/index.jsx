import axios from "axios";
import { useState, useEffect } from "react";
import { Inicio, ContainerFilmes, Poster } from "./style";




export default function ContainerInicio(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {setFilmes(response.data)})
    },[]);

    

    
    return (
        <Inicio>
            <h2>Selecione o filme</h2>
            <ContainerFilmes>
                {filmes.map((filme) => (
                    <Poster id={filme.id} key={filme.id}>
                        <img src={filme.posterURL} alt={filme.title}/>
                    </Poster>
                ))}
            </ContainerFilmes>
        </Inicio>
    );
}