import React, { Component } from 'react';

class TableExpenses extends Component {
  render() {
    return (
      <div>
        <header>
          <table>
            <td>
              <th id="Descrição" value="Descrição">Descrição</th>
              <th id="" value="">Tag</th>
              <th id="" value="">Método de pagamento</th>
              <th id="" value="">Valor</th>
              <th id="" value="">Moeda</th>
              <th id="" value="">Câmbio utilizado</th>
              <th id="" value="">Valor convertido</th>
              <th id="" value="">Moeda de conversão</th>
              <th id="" value="">Editar/Excluir</th>

            </td>
          </table>
        </header>
      </div>
    );
  }
}

export default TableExpenses;
