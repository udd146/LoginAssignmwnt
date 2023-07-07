import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
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
          // Redirect to another page (e.g., using React Router)
          // history.push('/dashboard');
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
     <div className='MainBody'>
     <div className='Login_details'>
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <div className='EmailClass'><label htmlFor='email'>
          Email
        </label>
        <br/>
        <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}>
        </input></div>
        <div className='PassClass' ><label htmlFor='password' className='pass'>
          Password
        </label>
        <br/>
        <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input></div>
        <button className='LoginButton' type='submit'>Login</button>
        <br/>
        {/* <button className='LoginButton' >Forget password</button> */}
       <a href='/'><p>forget password</p></a>  
      </form>
      {loginStatus && <p>{loginStatus}</p>}
     </div>
     </div> 
  );
}

export default App;
