import "./UserReview.scss"

import { useDarkMode } from "../../contexts/DarkModeContext"

import { UserReviewProps } from "../../Types"

function UserReview(props: UserReviewProps) {
  const { avatar, name, review } = props
  const { colorMode } = useDarkMode()

  return (
    <div className={`review_container __${colorMode}`}>
      <div className="review_avatar_container">
        <img src={avatar} alt={name} />
      </div>
      <div className="review_text_container">
        <h1 className={`__${colorMode}`}>{name}</h1>
        <div className="review_text">
          <p className={`__${colorMode}`}>{review}</p>
        </div>
      </div>
    </div>
  )
}

export default UserReview