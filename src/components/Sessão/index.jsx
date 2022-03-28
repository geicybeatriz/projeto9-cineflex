import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Titulo from "../Titulo";
import { ContainerSessoes, DiaSemana, Horarios, Hora, Sessoes } from "./style";
import Footer from "../Footer/"

export default function Sessao(){
    const {idFilme} = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [infoFilme, setInfoFilme] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => 
            {setSessoes(response.data.days)
            setInfoFilme(response.data)})
        }, [idFilme]);

    return (
        <Sessoes>
            <Titulo texto="Selecione o horário" sucesso={false}/>
            <ContainerSessoes>
                {sessoes.map(({id:idSession, weekday, date, showtimes}) => 
                    <>
                        <DiaSemana key={idSession}>{weekday} - {date} </DiaSemana>
                        <Horarios>
                            {showtimes.map(({name, id:idHora}) =>
                            <Link to={`/assentos/${idHora}`}>
                                <Hora key={idHora} id={idHora}>{name}</Hora>
                            </Link>
                            )}
                        </Horarios>
                    </>
                )}
            </ContainerSessoes>
            
            <Footer movie={infoFilme} day={{weekday:""}} name=""/>
        </Sessoes>
    );
}