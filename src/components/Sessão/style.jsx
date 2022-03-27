import styled from "styled-components";

export const Sessoes = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
    background-color: #ffffff;
`;

export const ContainerSessoes = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 24px;
    background-color:#ffffff;
`;

export const DiaSemana = styled.h1`
    width: 100%;
    height:35px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    display: flex;
    align-items:center;
    justify-content: left;

    letter-spacing: 0.02em;
    color: #293845;
`;

export const Horarios = styled.article`
    width: 100%;
    margin: 22px 0;
`;

export const Hora = styled.button`
    width: 83px;
    height: 43px;

    color:#ffffff;
    font-size:18px;
    line-height:21px;
    
    background-color: #E8833A;
    border-radius: 3px;
    border:none;

    margin-right: 8px;
    cursor: pointer;
`;
