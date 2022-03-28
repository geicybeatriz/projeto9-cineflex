import Titulo from "../Titulo";
import Footer from "../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, ContainerAssentos, Exemplos, Exemplo, BolinhaAmarela, BolinhaCinza, BolinhaVerde, Descricao} from "./style";
import Formulario from "../Formulario";

export default function Assentos(){
    const {idHora} = useParams();
    const [poltronas, setPoltronas] = useState({});
    const [status, setStatus] = useState([]);


    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHora}/seats`);
        promise.then((response) => setPoltronas(response.data));
    }, [idHora]);
    
    if(!poltronas.seats) return (<div>Espera aí. Confia!</div>);

    function selecionarAssento(id){
        if(status.includes(id)){
            setStatus(status.filter((e) => e === id ? false : true));
        } else {
            setStatus([...status, id]);
        }
    }

    return (
        <>
            <Container>
                <Titulo texto="Selecione o(s) assento(s)" sucesso={false}/>

                <ContainerAssentos>
                    {poltronas.seats.map(({id, name, isAvailable}) => 
                    <>
                    {isAvailable ? <BolinhaCinza id={id} 
                                    selecionado={status.includes(id)} 
                                    onClick={() => selecionarAssento(id)} >{name}</BolinhaCinza> 
                        :
                        <BolinhaAmarela id={id} onClick={() => alert("Esse assento não está disponível.")}>{name}</BolinhaAmarela>}
                    </>
                    )}
                </ContainerAssentos>

                <Exemplos>
                    <Exemplo>
                        <BolinhaVerde></BolinhaVerde>
                        <Descricao>Selecionado</Descricao>
                    </Exemplo>
                    <Exemplo>
                        <BolinhaCinza></BolinhaCinza>
                        <Descricao>Disponível</Descricao>
                    </Exemplo>
                    <Exemplo>
                        <BolinhaAmarela></BolinhaAmarela>
                        <Descricao>Indisponível</Descricao>
                    </Exemplo>
                </Exemplos>

                <Formulario />
            </Container>

            <Footer movie={poltronas.movie} day={poltronas.day} name={poltronas.name} />

            
        </>
    );
}
