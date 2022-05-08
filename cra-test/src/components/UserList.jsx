import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("User Rendered:" +  user.id);
    return () => {
      console.log("Clean up:" + user.id);
    }
  }, []);
  return (
    <div>
      <b style={{
        cursor: "pointer",
        color: user.active ? "green" : "black",
      }} onClick={() => {
        onToggle(user.id);
      }}>
        {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={() => {
        onRemove(user.id);
      }}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {
        users.map((user, index) => {
          return (
            <User 
              user={user} 
              key={user.id} 
              onRemove={onRemove} 
              onToggle={onToggle}
            />
          );
        })
      }
    </div>
  );
}

export default UserList;