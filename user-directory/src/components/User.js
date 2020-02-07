import React from "react";
import UserData from "../data/users.json";
import "./user.css";

function User() {

  return (
    <div className="container">
    <div>
      {UserData.length ? (
        <ul className="list-group">
          <h2 ClassName="text-center">Users</h2>

          {UserData.map(result => (
            <li className="list-group-item" key={result.id}>
              <img src="../public/profile-pic.png"></img>
              <span ClassName="name"><b>{result.firstname} {result.lastname}</b></span>
              <span className="badge badge-dark badge-pill">{result.email}</span>
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Users Have Been Added</h2>
        )}
    </div>
    </div>
  )
}

export default User;