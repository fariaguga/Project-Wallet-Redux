import React from 'react';

class FormsWallet extends React.Component {
  constructor() {
    super();
    this.aExpenses = this.renderExpenses.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  renderExpenses() {
    return (
      <label htmlFor="despesa-value">
        Valor despesa:
        <input
          data-testid="value-input"
          name="despesa-value"
          type="text"
        // onChange
        />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="despesa-description">
        Descrição despesa:
        <input
          data-testid="description-input"
          name="despesa-description"
          type="text"
        // onChange
        />
      </label>
    );
  }

  renderCurrency() {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          name="currency"
        >
          <option>BRL</option>
        </select>
      </label>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="Tag">
        Tag
        <select
          type="number"
          name="Tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.renderExpenses()}
        {this.renderDescription()}
        {this.renderCurrency()}
        {this.renderPayment()}
        {this.renderTag()}
        <button
          type="submit"
          // disabled={ disabled }
          // onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

export default FormsWallet;
