import Titulo from "../Titulo";
import Footer from "../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, ContainerAssentos, Exemplos, Exemplo, BolinhaAmarela, BolinhaCinza, BolinhaVerde, Descricao} from "./style";
import Formulario from "../Formulario";

export default function Assentos({atualizarDados}){
    const {idHora} = useParams();
    const [poltronas, setPoltronas] = useState({});
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [numPoltrona, setNumPoltrona] = useState([]);


    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHora}/seats`);
        promise.then((response) => setPoltronas(response.data));
    }, [idHora]);
    
    if(!poltronas.seats) return (<div>Espera aí. Confia!</div>);

    function selecionarAssento(id,name){
        if(assentosSelecionados.includes(id)){
            setAssentosSelecionados(assentosSelecionados.filter((e) => e === id ? false : true));
            setNumPoltrona(numPoltrona.filter((e) => e === name ? false : true));
        } else {
            setAssentosSelecionados([...assentosSelecionados, id]);
            setNumPoltrona([...numPoltrona, name]);
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
                                    selecionado={assentosSelecionados.includes(id)} 
                                    onClick={() => selecionarAssento(id, name)} >{name}</BolinhaCinza> 
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

                <Formulario assentosSelecionados={assentosSelecionados} 
                            numPoltrona={numPoltrona} 
                            setNumPoltrona={setNumPoltrona}
                            atualizarDados={atualizarDados}
                            poltronas={poltronas}/>
            </Container>

            <Footer movie={poltronas.movie} day={poltronas.day} name={poltronas.name} />
        </>
    );
}
