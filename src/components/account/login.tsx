import React, { useState } from 'react';
import axios from 'axios';
import { Auth_Endpoint } from '../../Common/ApiConfig';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { useSignIn } from "react-auth-kit";

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  
  const { t } = useTranslation();
  const signIn = useSignIn();
  const [user, setUser] = useState<User>({
    email: '',
    password: ''
  } as User);
 
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };
  
  const headers = {
    'Content-Type': 'application/json'
  };

  const loginUser = (userData: User) => {
    setIsInvalidCredentials(false);
    axios.post(Auth_Endpoint.Login, userData, { headers })
      .then(response => {
        
        // Obsługa sukcesu
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
        })
        window.location.href = "/Dashboard";
      })
      .catch(error => {
        setIsInvalidCredentials(true);
        // Obsługa błędu
        console.error(error);
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser(user);
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <a className="navbar-brand " href="#">Komsy</a>
          <LanguageSelector />
          <div className="navbar-nav ms-auto">
            <a className="btn btn-primary" href="/Signup">{t('signup')}</a>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center pt-4 ">
        <form className="card p-4" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Logowanie</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adres e-mail</label>
            <input 
              type="email" id="email" className="form-control"
              name="email" 
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Hasło</label>
            <input 
              type="password" id="password" className="form-control" 
              name="password" 
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Zaloguj</button>
          {isInvalidCredentials && 
            <div className="alert alert-danger mt-2">Nieprawidłowy adres e-mail lub hasło</div>
          
          }
        </form>
      </div>
    </div>
  );
};

export default Login;