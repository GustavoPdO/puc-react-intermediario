import "./Welcome.scss"
import WelcomeText from '../WelcomeText';
import WelcomeForm from "../WelcomeForm";

function Welcome() {

  return (
    <div className='welcome'>
        <div className='container'>
            <div className='column'>
                <WelcomeText />
            </div>
            <div className='column'>
                <WelcomeForm />
            </div>
        </div>
    </div>
  )
}

export default Welcome