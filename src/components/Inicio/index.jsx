import axios from "axios";
import { useState, useEffect } from "react";
import { Inicio, ContainerFilmes, Poster } from "./style";
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
                {filmes.map((filme) => (
                    <Poster id={filme.id} key={filme.id}>
                        <img src={filme.posterURL} alt={filme.title}/>
                    </Poster>
                ))}
            </ContainerFilmes>
        </Inicio>
    );
}