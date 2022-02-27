import { useEffect, useState } from "react"

import UserReview from "../components/UserReview"
import Welcome from "../components/Welcome"

import { getReviewList } from "../services/faker/faker"
import { UserReviewProps } from "../Types"
import { useDarkMode } from "../contexts/DarkModeContext"

function Home() {
  const [reviewList, setReviewList] = useState<Array<UserReviewProps>>()
  const { colorMode } = useDarkMode()

  useEffect(() => {
    setReviewList(getReviewList())
  }, [])

  return (
    <>
      <div className={`container __top primary-bg __${colorMode}`}>
        <Welcome />
      </div>
      <div className={`container secondary-bg __${colorMode}`}>
        <div className="list space-around">
          {reviewList?.map(({ avatar, name, review }, index) => <UserReview key={`${name}-${index}`} avatar={avatar} name={name} review={review} />)}
        </div>
      </div>
    </>
  )
}

export default Home