import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Adjust the path to App.css
import { UserContext } from '../context/UserContext'; // Import UserContext

function Login() {
  const { setUser, registeredUsers } = useContext(UserContext); // Use registeredUsers from UserContext
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authenticate user
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    if (user) {
      setUser(user);
      navigate('/');
      alert(`Welcome ${user.firstName}! Nice to see you.`);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="page-background">
      <div className="container login">
        <h2 className="my-4">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;