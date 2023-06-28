import React, { useState } from 'react';
import axios from 'axios';
import { Auth_Endpoint } from '../../Common/ApiConfig';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
 
  const [user, setUser] = useState<User>({
    email: '',
    password: ''
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
const loginUser = (userData: User) => {
  debugger;
  axios.post(Auth_Endpoint.Login, userData, { headers })
    .then(response => {
      debugger;
      // Obsługa sukcesu
      console.log(response.data);
    })
    .catch(error => {
      debugger;
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

          <div className="navbar-nav ms-auto">
            <a className="btn btn-primary" href="#">Zarejestruj się</a>
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
              required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Hasło</label>
          <input type="password" id="password" className="form-control" 
            name="password" 
            value={user.password}
            onChange={handleInputChange}
            required />
        </div>
        <button type="submit" className="btn btn-primary">Zaloguj</button>
      </form>
      </div>
    </div>
            
    )
}


export default Login;