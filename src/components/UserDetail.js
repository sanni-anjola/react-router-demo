import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Boyo", gender: "male" },
  { id: 2, name: "Abigeal", gender: "female" },
  { id: 3, name: "Jumoke", gender: "female" },
  { id: 4, name: "Tunde", gender: "male" },
];

const UserDetail = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>UserDetail &rarr; {userId}</h1>
      <h2>Welcome to {users[userId - 1].name}'s page</h2>
    </div>
  );
};

export default UserDetail;
