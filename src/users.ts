type UserRole = "guest" | "admin" | "member"

type User = {
  id: number
  username: string
  role: UserRole
}

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  {id: nextUserId++, username: "john_doe", role: "member" },
  {id: nextUserId++, username: "jane_doe", role: "admin" },
  {id: nextUserId++, username: "guest_user", role: "guest" },]

console.log(users)

function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username)
  if(!user) {
    throw new Error("User with username " + username + " not found")
  }
  return user
}

console.log(fetchUserDetails("jane_doe"))

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id)
  if (!foundUser) {
    console.error("User not found")
    return
  }
  Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id" | "user">): User { 
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);

  return user;
}

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);

updateUser(1, {username: "new_john_doe"});
updateUser(4, {role: "guest"});

console.log(users)
