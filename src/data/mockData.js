import Profile1 from "../assets/profile-1.jpg";
import Profile2 from "../assets/profile-2.jpg";
import Profile3 from "../assets/profile-3.jpg";
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
  { category: "Others", amount: 300 },
];

export const balanceHistory = [
  { month: "Jul", balance: 5000 },
  { month: "Aug", balance: 5200 },
  { month: "Sep", balance: 4800 },
  { month: "Oct", balance: 3000 },
  { month: "Nov", balance: 3500 },
  { month: "Dec", balance: 5700 },
];
export const weeklyActivity = [
  { day: "Sat", deposit: 200, withdraw: 500 },
  { day: "Sun", deposit: 100, withdraw: 350 },
  { day: "Mon", deposit: 300, withdraw: 450 },
  { day: "Tue", deposit: 400, withdraw: 500 },
  { day: "Wed", deposit: 150, withdraw: 120 },
  { day: "Thu", deposit: 250, withdraw: 400 },
  { day: "Fri", deposit: 280, withdraw: 390 },
];

export const quickTransfer = [
  {
    avtar: Profile1,
    name: "Henna John",
    designation: "CEO",
  },
  {
    avtar: Profile2,
    name: "Randy Press",
    designation: "Director",
  },
  {
    avtar: Profile3,
    name: "Workman",
    designation: "Designer",
  },
];

export const user = {
  name: "Charlene Reed",
  username: "Charlione Reed",
  email: "charlenereed@gmail.com",
  password: "",
  dob: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "452",
  country: "USA",
  profilePicture: null,
};
