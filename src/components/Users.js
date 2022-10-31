import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "./Users.css";
const initialUsers = [
  { id: 1, name: "Boyo", gender: "male" },
  { id: 2, name: "Abigeal", gender: "female" },
  { id: 3, name: "Jumoke", gender: "female" },
  { id: 4, name: "Tunde", gender: "male" },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [params, setParams] = useSearchParams();
  const gender = params.get("gender");

  useEffect(() => {
    if (!gender) setUsers(initialUsers);
    else setUsers(initialUsers.filter((u) => u.gender === gender));
  }, [gender]);

  return (
    <div className="users">
      <div>
        <button
          onClick={() => {
            setParams({});
          }}
        >
          All users
        </button>
        <button
          onClick={() => {
            setParams({ gender: "female" });
          }}
        >
          Female users
        </button>
        <button
          onClick={() => {
            setParams({ gender: "male" });
          }}
        >
          Male users
        </button>
        {users.map((user) => (
          <h1 key={user.id}>
            {user.name} &rarr; is a {user.gender}
          </h1>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Users;
