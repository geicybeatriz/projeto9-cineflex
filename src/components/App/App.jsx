import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import ContainerInicio from "../Inicio";



export default function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ContainerInicio/>}></Route>
                {/* <Route path="/filme:idfilme" element={<Sessao/>}></Route>
                <Route path="/sessao:idsessao" element={<Assentos/>}></Route>
                <Route path="/sucesso" element={<Confirmacao/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}


