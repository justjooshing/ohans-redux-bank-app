export const withdrawMoney = (value) => ({
  type: "WITHDRAW_MONEY",
  value,
});

export const depositMoney = (value) => ({
  type: "DEPOSIT_MONEY",
  value,
});

export const donateAll = () => ({
  type: "DONATE_ALL",
});
