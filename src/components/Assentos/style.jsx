import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 67px 24px 0 24px;

    background-color: #ffffff;
`;

export const ContainerAssentos = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`;

export const Exemplos = styled.section`
    width:100%;
    
    display: flex;
    justify-content: space-around;
    align-items:center;

    margin: 16px 0;
`;

export const Exemplo = styled.article`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`;

export const BolinhaVerde = styled.div`
    width: 26px;
    height: 26px;

    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 50%;

    margin: 0 7px 9px 7px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
    cursor:pointer;
`;

export const BolinhaCinza = styled.div`
    width: 26px;
    height: 26px;
    margin: 0 7px 9px 7px;

    background-color: ${props => props.selecionado ? "#8DD7CF" : "#C3CFD9"};
    border: 1px solid #808F9D;
    border-color: ${props => props.selecionado && "#8DD7CF"};
    border-radius: 50%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
    cursor:pointer;
`;

export const BolinhaAmarela = styled.div`
    width: 26px;
    height: 26px;
    margin: 0 7px 9px 7px;

    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 50%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
    cursor:pointer;
`;

export const Descricao = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.013em;

    color: #4E5A65;
`;
