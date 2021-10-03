
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 20px;
  font-size: 16px;
  padding: 10px;
  border-radius:10px;
`;

function App() {
  const [troco, setTroco] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);

  const calcTotal = (t, g) => {
    return (Number(t) * Number(g)) / 100;
  };

  const total = (t, g) => {
    return Number(t) + (Number(g) / 100) * Number(t);
  };

  return (
    <div className="App">
      <>
        <h1>Calculadora de Gorjeta</h1>
        <p>Quanto deu o troco?</p>
        <Input
          onChange={(e) => Number(setTroco(e.target.value))}
          type={"number"}
          value={troco}
        />
        <br />
        <p>Qual a porcentagem de gorjeta?</p>
        <Input
          onChange={(e) => Number(setGorjeta(e.target.value))}
          type={"number"}
          value={gorjeta}
        />
        <hr />
        {troco > 0 && (
          <>
            <p>Sub-total: R$ {troco}</p>
            <p>
              Gorjeta({gorjeta}%): R$ {calcTotal(troco, gorjeta)}
            </p>
            <strong>Total: R$ {total(troco, gorjeta)}</strong>
          </>
        )}
      </>
    </div>
  );
}

export default App;

