import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header"
import ContainerInicio from "../Inicio";
import Sessao from "../Sessão";
import Assentos from "../Assentos";
import Sucesso from "../Sucesso";
import { useState } from "react";

export default function App(){
    const [dadosCompra, setDadosCompra] = useState({})

    function atualizarDados(title, weekday, horario, nome, cpf, assento){
        const dadosAtualizados = {title: title, 
                                    weekday: weekday,
                                    horario: horario,
                                    nomeComprador: nome,
                                    cpfComprador: cpf,
                                    assento: assento};
    
        setDadosCompra(dadosAtualizados);
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ContainerInicio/>}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessao/>}></Route>
                <Route path="/assentos/:idHora" element={<Assentos atualizarDados={atualizarDados}/>}></Route>
                <Route path="/sucesso" element={<Sucesso atualizarDados={atualizarDados} dadosCompra={dadosCompra}/>}></Route> 
            </Routes>
        </BrowserRouter>
    );
}


