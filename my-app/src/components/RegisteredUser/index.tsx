import "./RegisteredUser.scss"

import { useDarkMode } from "../../contexts/DarkModeContext"

import { RegisteredUserProps } from "../../Types"

import { NoProfilePic } from "assets/NoProfilePic"

function RegisteredUser({ avatar, name, email }: RegisteredUserProps) {
  const { colorMode } = useDarkMode()

  return (
    <div className={`card_container __${colorMode}`}>
      <div className="card_avatar_container">
        <img src={avatar || NoProfilePic} alt="" />
      </div>
      <div className="card_text_container">
        <p className={`__${colorMode}`}>{name}</p>
        <p className={`__${colorMode}`}>{email}</p>
      </div>
    </div>
  )
}

export default RegisteredUser