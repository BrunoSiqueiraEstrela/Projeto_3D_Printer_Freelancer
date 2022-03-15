import {useEffect, userEffect, useState} from 'react';
import api from '../services/api';
import UserItem from '../components/UserItem';

export default function User() {

  const [user, setUser] = useState([{}])

  useEffect(() =>{
    api.get("/users/")
    .then((response) => setUser(response.data))
    .catch((err) => { console.error("ERROR") });
  }, [] )

  return (
    <div className='App'>

      < UserItem
        name={user?.name} 
        password={user?.password} 
        nickname={user?.nickname} 
        email={user?.email} 
        city={user?.city} 
      />

    </div>
    );
}


