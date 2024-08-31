type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Peperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza): Pizza {
  menu.push(pizzaObj)
  return pizzaObj
}

function placeOrder(Pizza: Pizza): Order | undefined {
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: Pizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  cashInRegister += Pizza.price;
  return newOrder;
}

function addToArray<Type>(array: Type[], item: Type): Type[] { 
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12});
addToArray<Order>(orderHistory, {id: nextOrderId++, pizza: menu[2], status: "completed"});

console.log(menu);
console.log(orderHistory);


function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderHistory`);
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetails(identifier: number | string): Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find((order) => order.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
  } else {
    throw new Error("Parameter 'identifier' must be a number or a string");
  }
}









// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------








// type Address = {
//   street: string;
//   city: string;
//   country: string;
// };

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address?: Address;
// };

// let person1: Person = {
//   name: "John",
//   age: 30,
//   isStudent: true,
// };

// let person2: Person = {
//   name: "Jill",
//   age: 25,
//   isStudent: false,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
// };

// function printPerson(person: Person) {
//   console.log(`${person.name} lives at ${person.address?.street}`);
// }

// printPerson(person1);















// --------- Typing arrays ----------
// let ages: number[] = [25, 26, 27];

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// let person1: Person = {
//   name: "John",
//   age: 30,
//   isStudent: true,
// };

// let person2: Person = {
//   name: "Jill",
//   age: 25,
//   isStudent: false,
// };

// let people: Person[] = [person1, person2];










// --------- Literal types ----------

// type UserRole = "guest" | "admin" | "member"
// let userRole: UserRole = "guest"







// --------- Union types ----------
// type User = {
//   username: string
//   role: "guest" | "admin" | "member"
// }










// --------- Function return types ----------

// type UserRole = "guest" | "admin" | "member"

// type User = {
//   username: string
//   role: UserRole
// }

// const users: User[] = [
//   { username: "john_doe", role: "member" },
//   { username: "jane_doe", role: "admin" },
//   { username: "guest_user", role: "guest" },]

// function fetchUserDetails(username: string): User {
//   const user = users.find(user => user.username === username)
//   if(!user) {
//     throw new Error("User with username " + username + " not found")
//   }
//   return user
// }







// --- TS-specific types: any, unknown ---
// let value: any = 1
// value = "hi"
// value = "hi"
// value.map()













// --------- Utility types & Partial ----------

// type User = {
//   id: number
//   username: string
//   role: "contributor" | "admin" | "member"
// }

// // type UpdatedUser = {
// //   id?: number
// //   username?: string
// //   role?: "contributor" | "admin" | "member"
// // }

// type UpdatedUser = Partial<User> // "Generics" syntax for utility types using
//                                  //  angle brackets (<>) and call the type "Partial"

// let newUserId = 1

// const users: User[] = [
//   { id: 1, username: "john_doe", role: "member" },
//   { id: 2, username: "jane_smith", role: "contributor" },
//   { id: 3, username: "alice_jones", role: "admin" },
//   { id: 4, username: "charlie_brown", role: "member" },
// ]

// function updateUser(id: number, updates: UpdatedUser) {
//   const foundUser = users.find(user => user.id === id)
//   if (!foundUser) {
//     console.error("User not found")
//     return
//   }
//   Object.assign(foundUser, updates)
// }

// updateUser(1, {username: "new_john_doe"});
// updateUser(4, {role: "contributor"});

// console.log(users)















// --- Omit Utility Type ---

// type User = {
//   id: number;
//   username: string;
//   role: "contributor" | "admin" | "member";
// };

// type UpdatedUser = Partial<User>;

// let nextUserId = 1;

// const users: User[] = [
//   { id: nextUserId++, username: "john_doe", role: "member" },
//   { id: nextUserId++, username: "jane_smith", role: "contributor" },
// ];

// function updateUser(id: number, updates: UpdatedUser) {
//   const foundUser = users.find((user) => user.id === id);
//   if (!foundUser) {
//     console.error("User not found");
//     return;
//   }
//   Object.assign(foundUser, updates);
// }

// function addNewUser(newUser: Omit<User, "id" | "user">): User { // Omit utility type with generics syntax for
//                                                                 // utility types using angle brackets (<>)
//                                                                 // and call the type "Omit" and pass the type "User"
//                                                                 // as the first argument and "id" and "user" as the second
//   const user: User = {
//     id: nextUserId++,
//     ...newUser,
//   };
//   users.push(user);

//   return user;
// }

// addNewUser({ username: "joe_schmoe", role: "member" });

// console.log(users);













// ----- Generics -----
// const gameScores: number[] = [14, 21, 33, 42, 59, 12];
// const favoriteThings = [
//   "raindrops on roses",
//   "whiskers on kittens",
//   "bright copper kettles",
//   "warm woolen mittens",
// ];
// const voters = [
//   { name: "Alice", age: 42 },
//   { name: "Bob", age: 77 },
// ];

// function getLastItem<Type>(array: Type[]): Type | undefined {
//   return array[array.length - 1];
// }

// console.log(getLastItem(gameScores));
// console.log(getLastItem(favoriteThings));
// console.log(getLastItem(voters));
