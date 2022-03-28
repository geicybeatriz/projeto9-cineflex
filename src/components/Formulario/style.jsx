import styled from "styled-components";

export const Form = styled.form`
    width: 100%;

    padding-bottom:100px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    width: 100%;
    height: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;

    margin-top:7px;
`;

export const Inputs = styled.input`
    width: 100%;
    height: 51px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;

    padding-left: 18px;

    &::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }
`;

export const Button = styled.button`
    width: 225px;
    height: 42px;

    background: #E8833A;
    border-radius: 3px;
    border:none;

    margin:57px 0 60px 0;

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
`; 
