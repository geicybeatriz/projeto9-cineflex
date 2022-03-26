import styled from "styled-components";

export const Inicio = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 67px;
    background-color: yellow;

    h2 {
        width: 100vw;
        height: 110px;
    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        
        color: #293845;
        background-color: blueviolet;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerFilmes = styled.section`
    width: 100vw;

    display:flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Poster = styled.article`
    width: 145px;
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    margin: 0 15px 11px 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 129px;
        height: 193px;
    }
`;
