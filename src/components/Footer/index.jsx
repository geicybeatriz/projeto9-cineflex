import { ContainerFooter, Filme, ImgFilme, NomeFilme } from "./style";


export default function Footer(props){
    const {infoFilme} = props;
    const {id, title, posterURL} = infoFilme;

    return (
        <ContainerFooter>
            <Filme>
                <ImgFilme id={id} src={posterURL} alt={title}/>
            </Filme>
            <NomeFilme>{title}</NomeFilme>
        </ContainerFooter>
    );
}