import { useDarkMode } from "../../contexts/DarkModeContext"
import "./WelcomeText.scss"

function WelcomeText() {
  const { colorMode } = useDarkMode()
  return (
    <div className='item'>
      <div className='text'>
        <h3 className={`title ${colorMode}`}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </h3>
        <p className={`info ${colorMode}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc. Duis facilisis justo vitae feugiat sodales. Nunc a dignissim leo, ut volutpat dolor. Pellentesque fringilla libero vitae urna dictum consequat. In sit amet lectus bibendum, lacinia justo aliquam, dapibus augue. Etiam bibendum consectetur tortor, ac consequat ex venenatis vel. Aliquam suscipit luctus vestibulum. Mauris non turpis pretium justo commodo euismod.
        </p>
      </div>
    </div>
  )
}

export default WelcomeText