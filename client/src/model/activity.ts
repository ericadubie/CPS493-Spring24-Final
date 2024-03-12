import data from "../data/activity.json"

export interface Activity {
    name: string
    username: string
    profilePic: string
    title: string
    pictureURL: string
    location: string
    distance: string
    duration: string
    timePosted: string
}

export function getActivities(): Activity[]{
    return data.items;
  }