const data = [
  {
    id: 0,
    name: "Nestor",
    location: {
      city: "Belgrade",
      country: "Serbia",
      postalCode: 11070,
    },
  },
  {
    id: 1,
    name: "Ana",
    location: {
      city: "Belgrade",
      country: "Serbia",
      postalCode: 11070,
    },
  },
  {
    id: 2,
    name: "John",
    location: {
      city: "New York",
      country: "US",
      postalCode: 10001,
    },
  },
  {
    id: 3,
    name: "Stefan",
    location: {
      city: "Krusevac",
      country: "Serbia",
      postalCode: 37000,
    },
  },
  {
    id: 4,
    name: "Ana",
    location: {
      city: "Novi Sad",
      country: "Serbia",
      postalCode: 21000,
    },
  },
];

const userPhoneNumbers = [
  { id: 4, phoneNumber: "06227634328" },
  { id: 2, phoneNumber: "060374632" },
  { id: 1, phoneNumber: "06038127392" },
  { id: 3, phoneNumber: "06372164249" },
];

// 1. Filtrirati sve usere koji se nalaze u Srbiji
const newFilteredArr = data.filter((user) => {
  return user.location.country === "Serbia";
});
console.log(newFilteredArr);
// 2. Pronaci prvog usera ciji je country US
const usUser = data.find((user) => {
  return user.location.country === "US";
});
// 3. Proveriti da li su svi postalCodes validni -> "duzina" veca od 5
const allCodesValid = data.every((user) => {
  return user.location.postalCode >= 10000;
});
// 4. Za svaki element niza formatirati string u sledecem formatu (console.log):
//         Ana - Novi Sad, Serbia
data.forEach((user) => {
  const formattedStr = `${user.name} - ${user.location.city}, ${user.location.country}`;
  console.log(formattedStr);
});
// 5. Napraviti novi niz ciji su elementi samo id i name usera (bez location-a)
const newArray = data.map((user) => {
  return {
    id: user.id,
    name: user.name,
  };
});
// 6. Napraviti novi niz ciji su elementi 'mergovani' elementi niza data i userPhoneNumbers po id (iskoristiti spread operator)
const mergedArr = data.map((user) => {
  const userPhoneNumber = userPhoneNumbers.find((phoneNumber) => {
    return user.id === phoneNumber.id;
  });
  return {
    ...user,
    phoneNumber: userPhoneNumber
      ? userPhoneNumber.phoneNumber
      : "No phone number",
  };
});

const inventory = [
  { name: "Laptop", category: "Electronics", price: 1200, quantity: 5 },
  { name: "Phone", category: "Electronics", price: 800, quantity: 0 },
  { name: "Headphones", category: "Accessories", price: 150, quantity: 10 },
  { name: "Keyboard", category: "Accessories", price: 75, quantity: 3 },
  { name: "Mouse", category: "Accessories", price: 50, quantity: 20 },
];

const inventoryNew = inventory.map((elem) => {
  return {
    ...elem,
    totalPrice: elem.price * elem.quantity,
  };
});

// Bonus zadatak :
// napraviti novi niz koji sadrzi key totalPrice (price * quantity) (iskoristiti spread operator)

//  R E D U C E

const arr = [2, 9, 0, 199, 32817, 271, 473];

// es5 -> suma svih elemenata iz arr niza
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// es6 -> suma svih elemenata iz arr niza koristeci reduce
const reduceSum = arr.reduce((acc, elem) => {
  return acc + elem;
}, 0);
console.log(reduceSum);
// 33771

// 1. acc = 0, elem = 2, callback => 2+0 = 2 (nova vrednost acc za sledecu iteraciju)
// 2. acc = 2, elem = 9, callback => 2 + 9 = 11 (nova vrednost acc za sledecu iteraciju)
// 3. acc = 11, elem = 0, callback => 11 + 0 = 11 (nova vrednost acc za sledecu iteraciju)
// 4. acc = 11, elem = 199, callback => 11 + 199 = 210 (nova vrednost acc za sledecu iteraciju)
// 5.
// 6.
// 7.

const input = ["banana", "banana", "cherry", "apple", "apple", "banana"];
// const output = {
//     banana: 3,
//     cherry: 1,
//     apple: 2
// }

// od niza stringova, gde svaki string predstavlja neku vocku, napraviti objekat gde ce svaki key biti vocka, a njegov value biti broj koliko tih vocki ima u tom nizu

// hint: reduce, pocetni acc: {}
//
