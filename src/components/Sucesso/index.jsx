import Titulo from "../Titulo";
import { Link } from "react-router-dom";
import { ContainerSucesso, Confirmacao, Dados, Botao } from "./style";

export default function Sucesso({dadosCompra, atualizarDados}){
    const {assento, cpfComprador, horario, nomeComprador, title, weekday} = dadosCompra;
    console.log(dadosCompra);

    if(!assento){
        return <h3>Carregando...</h3>;
    }

    return (
        <ContainerSucesso>
            <Titulo texto="Pedido feito com sucesso!" sucesso={true}/>
            <Confirmacao>
                <Dados>
                    <h3>Filme e sessão</h3>
                    <p>{title}</p>
                    <p>{weekday} - {horario}</p>
                </Dados>
                <Dados>
                    <h3>Ingressos</h3>
                    {assento.map((elemento) => <p>Assento: {elemento}</p>)}
                </Dados>
                <Dados>
                    <h3>Comprador</h3>
                    <p>Nome: {nomeComprador}</p>
                    <p>CPF: {cpfComprador.slice(0,3)}.{cpfComprador.slice(3,6)}.{cpfComprador.slice(6,9)}-{cpfComprador.slice(9,11)}</p>
                </Dados>
            </Confirmacao>
            <Link to="/">
                <Botao onClick={() => atualizarDados('', '', '', '', '', [])}>Voltar para Home</Botao>
            </Link>
        </ContainerSucesso>
    );

}