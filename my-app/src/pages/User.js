import {useEffect, userEffect, useState} from 'react';
import api from '../services/api';
import UserItem from '../components/UserItem';

export default function User() {

  const [user, setUser] = useState([{}])

  useEffect(() =>{
    api.get("/users/62299d94b277fc1d9042fa8e")
    .then((response) => setUser(response.data))
    .catch((err) => { console.error("ERROR") });
  }, [] )

  return (
    <div className='User'>

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


