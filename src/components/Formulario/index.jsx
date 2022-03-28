import {Form, Label, Inputs, Button} from "./style";

export default function Formulario(){
    return (
        <>
            <Form>
                <Label>Nome do comprador:</Label>
                <Inputs type="text" placeholder="Digite seu nome..."></Inputs>

                <Label>CPF do comprador:</Label>
                <Inputs type="number" placeholder="Digite seu CPF..."></Inputs>

                <Button type="submit">Reservar assento(s)</Button>
            </Form>
        </>


    );
}
