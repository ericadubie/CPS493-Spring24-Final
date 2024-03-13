import { reactive } from "vue";

interface User {
  name: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
  profilePic?: string;
  isAdmin: boolean;
  emails: string[];
}

interface storeUser {
  users: User[];
  addUser(user: User): void;
  userLogin(username: String): void;
  showLogin(): User | undefined;
  userLogout(): void;
}

export const getStoreUser = (): storeUser => {
  const users = reactive<User[]>([
      { name: "Erica Dubie", username: "edubz", id: 1, isLoggedIn: false, isAdmin: true, emails: ["erica@example.com", "erica2@example.com"]},
      { name: "Moshe Plotkin", username: "jewpaltz", id: 2, isLoggedIn: false, profilePic: "https://picsum.photos/id/1/200/300", isAdmin: false, emails: ["moshe@example.com"]},
      { name: "Ariana Grande", username: "queenari", id: 3, isLoggedIn: false, isAdmin: false, emails: ["ariana@example.com"] }
  ]);

  const addUser = (user: User) => {
    users.push(user);
  };

  function userLogin(username: string) {
    users.forEach((user) => {
      if(user.isLoggedIn === true && user.username !== username){
        user.isLoggedIn = false
        console.log(`${user.name} is logged out`)
      }
      if (user.username === username){
        user.isLoggedIn = true
        console.log(`${user.name} is logged in`)
      }
    })
  }

  function userLogout() {
    users.forEach((user) => {
      if(user.isLoggedIn === true){
        user.isLoggedIn = false
        console.log(`${user.name} is logged out`)
      }
    })
  }

  function showLogin() {
    return users.find(user => user.isLoggedIn)
  }

  return { users, addUser, userLogin, showLogin, userLogout };
};