import Titulo from "../Titulo";
import { useParams } from "react-router-dom";

export default function Assentos(){
    const {idSession} = useParams();
    
    return (
        <Assentos>
            <Titulo texto="Selecione o filme" sucesso={false}/>
        </Assentos>
    );
}