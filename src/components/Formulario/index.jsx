import { useState } from "react";
import axios from "axios";
import {Form, Label, Inputs, Button} from "./style";
import { useNavigate } from "react-router-dom";

export default function Formulario(props){
    const {assentosSelecionados, numPoltrona, atualizarDados, poltronas} = props
    const {name:hora, day:{date},movie:{title}} = poltronas;
    //console.log("esse", poltronas);
    const navigate = useNavigate();
    const [nome, setNome] =useState("");
    const [cpf, setCPF] = useState("");
    const REGEX_CPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

    function enviarDados(event){
        event.preventDefault();

        if(assentosSelecionados.length < 1) {
            return alert("Escolha, ao menos, um assento!");
        }

        if(!REGEX_CPF.test(cpf)){
            return alert("CPF inválido! Exemplo: 123.456.789-00 ou 12345678900");
        }

        const dadosConfirmacao = {
            ids: assentosSelecionados,
            nome: nome,
            cpf: cpf.replace(/\D/g,"")
        }
        
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dadosConfirmacao);
        promise.then(() => {navigate("/sucesso");
                            atualizarDados(title, date, hora, nome, cpf, numPoltrona)});
        promise.catch(response => console.log("Erro", response));
    }

    return (
        <>
            <Form onSubmit={enviarDados}>
                <Label htmlFor="nome">Nome do comprador:</Label>
                <Inputs type="text" 
                        id="nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Digite seu nome..." 
                        required></Inputs>

                <Label htmlFor="cpf">CPF do comprador:</Label>
                <Inputs type="text" 
                        id="cpf"
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}
                        placeholder="Digite seu CPF..."
                        required></Inputs>

                <Button type="submit">Reservar assento(s)</Button>
            </Form>
        </>

    );
}
