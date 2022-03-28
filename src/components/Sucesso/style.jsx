import styled from "styled-components";

export const ContainerSucesso = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 67px 24px 0 24px;

    background-color: #ffffff;
`;

export const Confirmacao = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Dados = styled.article`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;

    margin: 10px 0; 

    h3, p{
        font-family: 'Roboto';
        font-style: normal;
        
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`;

export const Botao = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content:center;
    align-items: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    width: 225px;
    height: 42px;

    background: #E8833A;
    border-radius: 3px;
    border: none;

    margin: 50px 0;
`;