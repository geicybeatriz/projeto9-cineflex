import Titulo from "../Titulo";
import { ContainerSucesso, Confirmacao, Dados, Botao } from "./style";



export default function Sucesso(){
    return (
        <ContainerSucesso>
            <Titulo texto="Pedido feito com sucesso!" sucesso={true}/>
            <Confirmacao>
                <Dados>
                    <h3>Filme e sessão</h3>
                    <p>nome do filme</p>
                    <p>data e hora</p>
                </Dados>
                <Dados>
                    <h3>Ingressos</h3>
                    <p>Assento: name do assento</p>
                </Dados>
                <Dados>
                    <h3>Comprador</h3>
                    <p>Nome: Drácula</p>
                    <p>CPF: 123.123.456-45</p>
                </Dados>
            </Confirmacao>
            <Botao>Voltar para Home</Botao>
        </ContainerSucesso>
    );

}