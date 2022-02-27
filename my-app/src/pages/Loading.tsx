import { useDarkMode } from "contexts/DarkModeContext"

function Loading() {
  const { colorMode } = useDarkMode()
  return <div className={`container __top primary-bg __${colorMode}`}>
  </div>
}

export default Loading