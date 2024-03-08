import data from "../data/users.json"

export interface User {
    name: string
    username: string
    profilePic: string
    title: string
    pictureURL: string
    location: string
    distance: string
    duration: string
}

export function getUsers(): User[]{
    return data.items;
  }