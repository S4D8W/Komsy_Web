
import React, { useState } from 'react';
import axios from 'axios';
import { Auth_Endpoint } from '../../Common/ApiConfig';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useSignIn } from "react-auth-kit";


interface User {
  email: string;
  password: string;
  FirstName: string;
  LastName: string;
}

const RegistrationForm: React.FC = () => {
  
  const signIn = useSignIn();
  const { t } = useTranslation();

  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: '',
    FirstName: '',
    LastName: ''
  } as User);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  const registerUser = (userData: User) => {
    axios.post(Auth_Endpoint.Register, userData, { headers })
      .then(response => {
        signIn({
          token: response.data.token,
          tokenType: "Bearer",
          expiresIn: 3600000,
          authState: {
            email: response.data.user.email,
            userId: response.data.uId,
            firstName: response.data.firstName,
            lastName: response.data.lastName

          }
        });
        console.log(response.data);
      })
      .catch(error => {
        // Obsługa błędu
       //let apiError = error.response.data as ApiError;
        console.error(error);
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    registerUser(user);
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <a className="navbar-brand " href="#">Komsy</a>
          <LanguageSelector />
          <div className="navbar-nav ms-auto">
            <a className="btn btn-primary" href="/login">{t('signin')}</a>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center pt-4 ">
      <form className="card p-4" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">{t("signup")}</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t("email")}</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            name="email" 
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">{t('password')}</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            name="password" 
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor='FirstName' className="form-label">{t('FirstName')}</label>
          <input
            type='text'
            id='FirstName'
            className="form-control"
            name='FirstName'
            value={user.FirstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor='LastName' className="form-label">{t('LastName')}</label>
          <input
            type='text'
            id='LastName'
            className="form-control"
            name='LastName'
            value={user.LastName}
            onChange={handleInputChange}
           
          />
        </div>


        <button type="submit" className="btn btn-primary">{t('signup')}</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;