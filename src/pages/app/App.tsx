import styled from "styled-components";
import { useState } from "react";

function App() {
  const [isInvalid, setisInvalid] = useState(false);
  const [invalidColor, setInvalidColor] = useState("black");

  if (isInvalid) {
    setInvalidColor("red");
  }

  return (
    <Div>
      <h1>Projeto De metodologia</h1>
      <h3>Login</h3>
      <Form onSubmit={() => alert("login efetuado")}>
        <Input placeholder="Email" type="text" required />
        <Input placeholder="Senha" type="text" required />
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </Div>
  );
}

export default App;

const Div = styled.div`
  background-color: #43a7ff;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Form = styled.form`
  background-color: #43a7ff;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Input = styled.input`
  color: black;
  border-style: solid;
  border-width: 1px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 50px;
  height: 20px;
`;

const SubmitButton = styled.button`
  color: black;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  background-color: white;
  border-radius: 3px;
  padding: 5px;
`;
