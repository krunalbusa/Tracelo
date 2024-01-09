// App.js
import React, { useEffect, useState } from 'react';

function Profile() {
  const [collection, setcollection] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/Login')
      .then((response) => response.json())
      .then((data) => {
        setcollection(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {collection.map((user) => (
          <li key={user._id}>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
