import {useEffect, userEffect, useState} from 'react';
import api from '../services/api';
import UserItem from '../components/UserItem';

export default function User() {

  const [users, setUsers] = useState([{}])

  useEffect(() =>{
    api.get("/users")
    .then((response) => setUsers(response.data))
    .catch((err) => { console.error("ERROR") });
  }, [] )

  return (
    <div className='Users'>
      {
        users.map( user => (

        
        < UserItem
        name={user?.name} 
        password={user?.password} 
        nickname={user?.nickname} 
        email={user?.email} 
        city={user?.city} 
       />
        ))
      }
    </div>
    );
}


