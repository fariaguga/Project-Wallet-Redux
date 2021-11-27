import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableExpenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <header>
          <table>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            <tbody>
              {
                expenses.map((elemento) => {
                  const { id, description, tag, method, value } = elemento;
                  const findCurrency = Object.entries(elemento.exchangeRates).find(
                    (exactCurrency) => elemento.currency === exactCurrency[0],
                  );
                  const curr = findCurrency[1].name.replace('/Real Brasileiro', '');
                  return (
                    <tr key={ id } className="table">
                      <td>{description}</td>
                      <td>{tag}</td>
                      <td>{method}</td>
                      <td>{value}</td>
                      <td>{curr}</td>
                      <td>
                        {Number(findCurrency[1].ask).toFixed(2)}
                      </td>
                      <td>{Number(findCurrency[1].ask * value).toFixed(2)}</td>
                      <td>Real</td>
                      <td>Editar/Excluir</td>
                      { // refetencia : https://github.com/tryber/sd-015-b-project-trybewallet/pull/83/commits/b0fbb563cb1bd090255b102a23e842ac626838fe
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
