import React from "react";
import "./userItem.css"

function UserItem({name,password,nickname,email,city}){

  return(

    <div className="UserItem">
      <p>Nome: {name}</p>
      <p>Password: {password} </p>
      <p>Nickname {nickname}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>

  );
}

export default UserItem;