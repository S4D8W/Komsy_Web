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

const loginUser = (userData: User) => {
  axios.post(Auth_Endpoint.Login, userData)
    .then(response => {
      // Obsługa sukcesu
      console.log(response.data);
    })
    .catch(error => {
      // Obsługa błędu
      console.error(error);
    });
};

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser(user);
  };

  
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
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
            
    )
}


export default Login;