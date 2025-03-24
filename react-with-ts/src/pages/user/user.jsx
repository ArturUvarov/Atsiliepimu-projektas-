import React, { useState, useEffect } from 'react';

export function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        setData(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
