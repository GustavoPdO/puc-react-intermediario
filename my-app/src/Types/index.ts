export type ColorModes = "light" | "dark"

export interface UserProps {
  id: number
  name: string
  avatar: string
  email: string
}
export interface UserReviewProps {
  /** Reviwer avatar url */
  avatar: string
  /** Reviewer name */
  name: string
  /** Review text */
  review: string
}

export interface RegisteredUserProps {
    avatar: string
    name: string
    email: string
}