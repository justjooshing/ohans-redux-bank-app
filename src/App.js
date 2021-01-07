import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { store } from "./store";
import { withdrawMoney, depositMoney, donateAll } from "./actions";

class App extends Component {
  render() {
    const dispatchWithdrawButtonAction = (e) => {
      const amount = Number(e.target.dataset.amount);
      store.dispatch(withdrawMoney(amount));
    };

    const dispatchDepositButtonAction = (e) => {
      const amount = Number(e.target.dataset.amount);
      store.dispatch(depositMoney(amount));
    };

    const dispatchDonateAllButtonAction = (e) => {
      store.dispatch(donateAll());
    };

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={dispatchWithdrawButtonAction} data-amount="10000">
            WITHDRAW $10,000
          </button>
          <button onClick={dispatchWithdrawButtonAction} data-amount="8000">
            WITHDRAW $8,000
          </button>
          <button onClick={dispatchDepositButtonAction} data-amount="5000">
            DEPOSIT $5,000
          </button>
        </section>

        <p onClick={dispatchDonateAllButtonAction} className="App__giveaway">
          Give away all your cash to charity
        </p>
      </div>
    );
  }
}

export default App;
