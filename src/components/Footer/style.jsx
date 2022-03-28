import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width:100%;
    height: 117px;

    position: fixed;
    bottom: 0;
    
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    justify-content: left;
    align-items: center;

`;

export const Filme = styled.article`
    width: 64px;
    height: 89px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 14px 10px;
`;

export const ImgFilme = styled.img`
    width: 48px;
    height: 72px;
`;

export const InfoFilme = styled.h1`
    width: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
`;

export const ContainerFilme = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;