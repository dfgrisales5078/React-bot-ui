import React from 'react';
import { useState } from 'react';


const HomePage = () => {
    const [username, setUsername] = useState('')
    const [amountOfLikes, setAmountOfLikes] = useState(0)
    const [follow, setFollow] = useState(false)

    console.log(`user input: ${username}}`)
    console.log(`user input: ${amountOfLikes}}`)
    console.log(`user input: ${follow}}`)


    return (
        <React.Fragment>
            <h1>Enter your Instagram:</h1>
            <form>
              <div class="form-group">
                <label for="usernameInput"><h5>Username:</h5></label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="usernameInput" 
                  placeholder="Ex: username_123" 
                  onChange={event => {
                    setUsername(event.target.value)
                  }}
                  input/>
              </div>

              <div class="form-group">
                <label for="usernameInput"><h5>How many posts do you want me to like?</h5></label>
                <input type="text" 
                class="form-control" 
                id="usernameInput" 
                placeholder="Ex: 10" 
                onChange={event => {
                  setAmountOfLikes(event.target.value)
                }}
                input/>
              </div>

              <div class="form-check">
                <input type="checkbox" 
                class="form-check-input" 
                id="follow-user" 
                onChange={event => {
                  setFollow(event.target.value)
                }}
                input/>

                <label class="form-check-label" for="follow-user">follow me too!</label>
              </div>

              <div class="mt-3 col-md-12">
                <button 
                  class="w-100 btn btn-lg btn-primary mr-1"
                  /*onClick={}*/
                  type="submit">Get likes!
                </button>
              </div>
            </form>
        </React.Fragment> 
    );
}

export default HomePage;