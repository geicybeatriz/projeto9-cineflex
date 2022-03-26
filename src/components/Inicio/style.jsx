import styled from "styled-components";

export const Inicio = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 67px;

    background-color: #ffffff;
`;

export const ContainerFilmes = styled.section`
    width: 100vw;

    background-color: #ffffff;

    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    gap: 11px 30px;

    padding-bottom: 100px;

`;

export const Poster = styled.article`
    width: 145px;
    height: 209px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 129px;
        height: 193px;
    }
`;
