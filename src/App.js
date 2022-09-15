import signInPage from './components/signInPage'
import React from 'react';
import './App.css';

function App() {
  return (
    <React.StrictMode>
        <h1>Enter your Instagram information:</h1>
        <form>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" input/>
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" input/>
            <label for="floatingPassword">Password</label>
          </div>

          {/* <div class="checkbox mb-3">
            <input type="checkbox" value="remember-me"> Remember me</input>
          </div> */}

          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>

    </React.StrictMode>
  );
}

export default App;
