import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersPromise } from "../slices/usersSlice";

function Users() {
  let { users, error, status } = useSelector((state) => state.users);
  let dispatch = useDispatch();

  function getUsers() {
    let action = usersPromise();
    dispatch(action);
  }

  return (
    <div>
      <button className="btn btn-warning" onClick={getUsers}>
        Get Users
      </button>
      <h1>{status}</h1>
      <h1>{error}</h1>
      {
        users.map(user=><h2 key={user.id}>{user.name}</h2>)
      }
    </div>
  );
}

export default Users;
