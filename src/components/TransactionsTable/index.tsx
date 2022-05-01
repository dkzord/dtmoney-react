import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categória</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>01/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$2.000,00</td>
            <td>Casa</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}