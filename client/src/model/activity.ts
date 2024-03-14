import data from "../data/activity.json"

export interface Activity {
    name: string
    username: string
    title: string
    pictureURL: string
    location: string
    distance: number
    duration: string
    timePosted: string
    date: string
}

export function getActivities(): Activity[]{
    return data.items;
  }