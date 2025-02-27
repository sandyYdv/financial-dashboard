export const cards = [
  {
    id: 1,
    holder: "John Doe",
    number: "**** **** **** 1234",
    balance: "$5,000",
    valid: "7/30",
  },
  {
    id: 2,
    holder: "John Doe",
    number: "**** **** **** 5678",
    balance: "$3,200",
    valid: "12/29",
  },
];

export const transactions = [
  {
    icon: "💳",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    isNegative: true,
  },
  {
    icon: "🅿️",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    isNegative: false,
  },
  {
    icon: "💰",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    isNegative: false,
  },
];

export const expenses = [
  { category: "Entertainment", amount: 200 },
  { category: "Bills", amount: 400 },
  { category: "Investments", amount: 300 },
];

export const balanceHistory = [5000, 5200, 4800, 5300, 5500, 5700];
