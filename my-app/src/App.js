import {useEffect, userEffect, useState} from 'react';
import api from './services/api';


export default function App() {

const [user, setUser] = useState([{}])

  useEffect(() =>{
    api.get("/users/62299d94b277fc1d9042fa8e")
    .then((response) => setUser(response.data))
    .catch((err) => { console.error("ERROR") });
  }, [] )

  return (
    <div className='App'>
      <p>name: {user?.name}</p>
      <p>password: {user?.password}</p>
      <p>nickname: {user?.nickname}</p>
      <p>nickname: {user?.nickname}</p>
      <p>city: {user?.city}</p>
    </div>
  );
}


