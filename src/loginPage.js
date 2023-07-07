import { useState } from 'react';
    
import {Link } from 'react-router-dom';
 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Make API request to verify credentials
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });
        console.log(response)
        // Get the response status code
        const statusCode = response.status;
  
        if (statusCode === 200) {
          // Login successful
          setLoginStatus('Login successful!');
          window.location.href = '/userform';
           
      
        } else if (statusCode === 401) {
          // Invalid email or password
          setLoginStatus('Invalid email or password.');
        } else {
          // Other status codes, handle accordingly
          setLoginStatus('Login failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        setLoginStatus('An error occurred. Please try again later.');
      }
    };

  return (
    <div className="ForgetPass">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className='LabelStyle'>
          Email:
          <input
          className='InputLabel'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className='LabelStyle'>
          Password:
          <input 
            className='InputLabel'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className='LoginButton' type="submit">Login</button>
      </form>
      <p className='LabelStyle'><Link to="/forget">forget password</Link></p>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default LoginPage;