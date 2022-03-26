import styled from "styled-components";

export const TituloElemento = styled.h2`
    width: 100vw;
    height: 110px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${props => props.sucesso === false ? 400 : 700};
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;

    margin: ${props => props.sucesso === false ? 0 : "0 25vw"};
    
    color: ${props => props.sucesso === false ? "#293845" : "#247A6B"};

    display: flex;
    align-items: center;
    justify-content: center;
`; 