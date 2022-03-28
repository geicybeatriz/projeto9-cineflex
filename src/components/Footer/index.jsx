import { ContainerFooter, Filme, ImgFilme, InfoFilme, ContainerFilme } from "./style";

export default function Footer(props){
    const {movie:{posterURL, title}, day:{weekday}, name} = props;

    return (
        <ContainerFooter>
            <Filme>
                <ImgFilme id={title} src={posterURL} alt={title}/>
            </Filme>
            <ContainerFilme>
                <InfoFilme>{title}</InfoFilme>
                {weekday !== "" && <InfoFilme>{weekday} - {name}</InfoFilme>}
            </ContainerFilme>
        </ContainerFooter>
    );
}