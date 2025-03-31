import React, { useState, useEffect } from 'react';

export function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <div>TESTING</div>
      {data.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
                  <h1>{user.email}</h1>

        </div>
      ))}
    </div>
  );
}

export default User;