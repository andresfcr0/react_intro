function greet(name: string) {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

// console.log(greet("Goku"));
// console.log(greet2("Vegeta"));

function getUser() {
  return {
    uid: "ABC-123",
    username: "ElPapi123",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC-123",
    username: "AndresElPapi",
  };
};

const user = getUser2();
// console.log(user);

const user3 = () => "Andressss";

// console.log(user3);

const logggg = (arr: number): void => console.log(arr + 1);

const urss = [1, 2, 3, 4];

urss.forEach(logggg);
