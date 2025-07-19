import React, { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/${isLogin ? 'login' : 'signup'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" /><br /><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" /><br /><br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>{message}</p>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}

export default App;