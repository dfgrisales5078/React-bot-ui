import React from 'react';
import { useState } from 'react';


const HomePage = () => {

    return (
        <React.Fragment>
            <h1>Enter your Instagram:</h1>
            <form action='http://127.0.0.1:5000/getlikes' method='post'>
              <div className="form-group">
                <label htmlFor="usernameInput"><h5>Username:</h5></label>
                <input 
                  type="text" 
                  name='username'
                  className="form-control" 
                  id="usernameInput" 
                  placeholder="Ex: username_123" 
                  input/>
              </div>

              <div className="form-group">
                <label htmlFor="usernameInput"><h5>How many posts do you want me to like?</h5></label>
                <input type="text" 
                name='posts'
                className="form-control" 
                id="usernameInput" 
                placeholder="Ex: 10" 
                input/>
              </div>

              <div className="form-check">
                <input type="checkbox" 
                name='follow'
                className="form-check-input" 
                id="follow-user" 
                input/>

                <label className="form-check-label" htmlFor="follow-user">follow me too!</label>
              </div>

              <div className="mt-3 col-md-12">
                {<button 
                  className="w-100 btn btn-lg btn-primary mr-1"
                  type="submit">Get likes!
                </button>}
              </div>
            </form>
        </React.Fragment> 
    );
}

export default HomePage;