import { useQuery } from "@apollo/client"
import RegisteredUser from "components/RegisteredUser"
import { useDarkMode } from "contexts/DarkModeContext"
import { useEffect, useState } from "react"
import { LOAD_USERS } from "../graphql/Queries"
import { UserProps } from "../Types"

function Users() {
  const [users, setUsers] = useState<UserProps[]>([])
  const { data } = useQuery(LOAD_USERS)

  const { colorMode } = useDarkMode()

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  return (
    <div className={`container __top primary-bg __${colorMode}`}>
      <ul className="list">
        {users.map(({ avatar, name, email }) => <li><RegisteredUser name={name} avatar={avatar} email={email} /></li>)}
      </ul>
    </div>
  )
}

export default Users