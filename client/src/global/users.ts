import { reactive } from "vue";

interface User {
  name: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
  profilePicURL?: string;
}

interface storeUser {
  users: User[];
  addUser(user: User): void;
}

export const getStoreUser = (): storeUser => {
  const users = reactive<User[]>([
      { name: "Erica Dubie", username: "edubz", id: 1, isLoggedIn: false },
      { name: "Moshe Plotkin", username: "jewpaltz", id: 2, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/1/200/300"},
      { name: "Ariana Grande", username: "queenari", id: 3, isLoggedIn: false }
  ]);

  const addUser = (user: User) => {
    users.push(user);
  };

  return { users, addUser};
};