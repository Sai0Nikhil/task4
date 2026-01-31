import React, { useState, useEffect } from 'react';
import { APIURL, callApi } from './lib';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const IMGURL = import.meta.env.BASE_URL;

  useEffect(() => {
    callApi('GET', APIURL, '', (res) => {
      setData(res);
    });
  }, []);

  const showUserInfo = (user) => {
    setShowPopup(true);
    setUserData(user);
  };

  const closeUserInfo = () => {
    setShowPopup(false);
    setUserData(null);
  };

  return (
    <div className="app">
      <div className="header">User List</div>

      <div className="section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={IMGURL + 'user.png'}
                    alt=""
                    onClick={() => showUserInfo(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="footer">@2026</div>

      {showPopup && userData && (
        <div className="overlay">
          <div className="popup">
            <button onClick={closeUserInfo}>X</button>

            <h2>User Details</h2>

            <p>ID: {userData.id}</p>
            <p>Name: {userData.name}</p>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Street: {userData.address.street}</p>
            <p>Suite: {userData.address.suite}</p>
            <p>City: {userData.address.city}</p>
            <p>Zip: {userData.address.zipcode}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
            <p>Company: {userData.company.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
