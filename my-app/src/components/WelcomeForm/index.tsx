import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { useDarkMode } from "../../contexts/DarkModeContext"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CREATE_USER } from '../../graphql/Mutations';
import { getMockedAvatar } from '../../services/faker/faker';

import "./WelcomeForm.scss"
import notify from 'services/toaster';
import { useTranslation } from 'react-i18next';

function WelcomeForm() {
  const { t } = useTranslation()
  const { colorMode } = useDarkMode()

  // Normal state declaration.
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => notify('success', t("register-success")),
    onError: () => notify("error", t("register-fail"))
  })

  const fullNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createUser({
      variables: {
        name: fullName,
        email: email,
        avatar: getMockedAvatar()
      }
    })
  };

  return (
    <div className='box'>
      <div className={`register __${colorMode}`}>
        <form onSubmit={submitHandler}>
          <div className='form'>
            <div className='field'>
              <TextField fullWidth label={t("full-name")} variant="outlined" onChange={fullNameChangeHandler} value={fullName} required />
            </div>
            <div className='field'>
              <TextField fullWidth label="Email" variant="outlined" onChange={emailChangeHandler} value={email} type="email" required />
            </div>
            <div className='field'>
              <Button variant="contained" fullWidth type="submit">{t("register-button")}</Button>
            </div>
            <div className='divider'>
              <Divider />
            </div>
            <div className='info'>
              <p className={`info-register __${colorMode}`}>
                {t("be-part")}
              </p>
              <p className={`info-register __${colorMode}`}>
                {`${t("wait-list-paragraph")} `}<Link to='users'>{t("here")}</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WelcomeForm