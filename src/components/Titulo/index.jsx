import { TituloElemento } from "./style";

export default function Titulo(props){
    const {sucesso, texto} = props;
    return (
        <TituloElemento sucesso={sucesso}>
            {texto}
        </TituloElemento>
    );

}