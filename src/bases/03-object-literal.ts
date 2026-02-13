interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  city: string;
}

const spiderman: Hero = {
  firstName: "",
  lastName: "",
  age: 0,
  address: {
    city: "",
  },
};

// const ironman: Hero = {
//   firstName: "Tony",
//   lastName: "Stark",
//   age: 45,
//   addres: {
//     city: "Bogotá",
//   },
// };

// const spiderman = structuredClone(ironman);

// spiderman.lastName = "Parker";
// spiderman.firstName = "Peter";
// spiderman.addres.city = "Medellin";

// console.log(ironman, spiderman);
