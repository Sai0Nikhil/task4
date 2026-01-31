import React, { Component } from 'react';
import { APIURL, callApi } from './lib';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], showpopup: null, userdata: null };
    this.getData = this.getData.bind(this);
    this.ShowUserInfo = this.ShowUserInfo.bind(this);
    this.closeUserInfo = this.closeUserInfo.bind(this);
  }

  componentDidMount() {
    callApi("GET", APIURL, "", this.getData);
  }

  getData(res) {
    this.setState({ data: res });
  }

  ShowUserInfo(user) {
    this.setState({ showpopup: true, userdata: user });
  }

  closeUserInfo() {
    this.setState({ showpopup: null, userdata: null });
  }

  render() {
    const { data, showpopup, userdata } = this.state;
    const IMGURL = import.meta.env.BASE_URL;

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
              {data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={IMGURL + "user.png"}
                      alt=""
                      onClick={() => this.ShowUserInfo(user)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="footer">@2026</div>

        {showpopup && userdata && (
          <div className="overlay">
            <div className="popup">
              <button onClick={this.closeUserInfo}>X</button>
              <h2>
                <span><h3>User Details</h3> </span>
              </h2>
              <p>
                <span><p>ID: {userdata.id}</p> </span>
              </p>
              <p>
                <span><p>Name: {userdata.name}</p> </span>
              </p>
              <p>
                <span> <p>Username: {userdata.username}</p></span>
              </p>
              <p>
                <span><p>Email: {userdata.email}</p> </span>
              </p>
              <p>
                <span>Street: {userdata.address.street}</span><br />
              </p>
              <p>
                <span>Suite: {userdata.address.suite}</span><br />
              </p>
              <p>
                <span>City: {userdata.address.city}</span><br />
              </p>
              <p>
                <span>Zip: {userdata.address.zipcode}</span><br />
              </p>
              <p>
                <span>Phone: {userdata.phone}</span><br />
              </p>
              <p>
                <span>Website: {userdata.website}</span><br />
              </p>
              <p>
                <span>Company: {userdata.company.name}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
