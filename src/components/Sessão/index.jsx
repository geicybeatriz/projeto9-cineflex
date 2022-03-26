import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Titulo from "../Titulo";
import { ContainerSessoes, DiaSemana, Horarios, Hora } from "./style";



export default function Sessao(){
    const {idFilme} = useParams();
    console.log(idFilme);

    //const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => console.log(response.data))
        }, []);

    return (
        <>
            <Titulo texto="Selecione o horário" sucesso={false}/>
            <ContainerSessoes>
                <DiaSemana>Quinta-Feira - 24/10/2022 </DiaSemana>
                <Horarios>
                    <Hora>15:00</Hora>
                    <Hora>19:00</Hora>
                </Horarios>
            </ContainerSessoes>
        </>

    );
}