export default (state, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      if (state.totalAmount - action.value > 0) {
        return {
          ...state,
          totalAmount: state.totalAmount - action.value,
        };
      } else {
        console.log("sorry, you don't have that much money to withdraw");
        return state;
      }
    case "DEPOSIT_MONEY":
      return {
        ...state,
        totalAmount: state.totalAmount + action.value,
      };
    case "DONATE_ALL":
      if (state.totalAmount > 0) {
        return {
          ...state,
          totalAmount: 0,
        };
      } else {
        console.log("sorry, you don't have any money to donate");
        return state;
      }
    default:
      return state;
  }
};
