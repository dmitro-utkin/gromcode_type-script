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
  menu.push(pizzaObj);
  return pizzaObj;
};

function placeOrder(Pizza: Pizza): Order {
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: Pizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  cashInRegister += Pizza.price;
  return newOrder;
};

function addToArray<Type>(array: Type[], item: Type): Type[] {
  array.push(item);
  return array;
};

addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Chicken Bacon Ranch",
  price: 12,
});
addToArray<Order>(orderHistory, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

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
};

function getPizzaDetails(identifier: number | string): Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find((order) => order.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(
      ({ name }) => name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    throw new Error("Parameter 'identifier' must be a number or a string");
  }
};
