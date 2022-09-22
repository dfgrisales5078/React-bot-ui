import React from 'react';
import { useState } from 'react';


const HomePage = () => {
    const [username, setUsername] = useState(' ')
    const [amountOfLikes, setAmountOfLikes] = useState(0)
    const [follow, setFollow] = useState('off')

    const data = {
      "username": username,
      "posts": amountOfLikes,
      "follow": follow
    }

    // fix post fucntion call?
    const getLikes = async () => {
      try {
        const response = await fetch('/getlikes',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              "username": username,
              "posts": amountOfLikes,
              "follow": follow
            }
          )
        })
        console.log(response);
      } catch (error) {
        throw error;
      }
    }

    return (
        <React.Fragment>
            <h1>Enter your Instagram:</h1>
            <form>
              <div className="form-group">
                <label htmlFor="usernameInput"><h5>Username:</h5></label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="usernameInput" 
                  placeholder="Ex: username_123" 
                  onChange={event => {
                    setUsername(event.target.value)
                  }}
                  input/>
              </div>

              <div className="form-group">
                <label htmlFor="usernameInput"><h5>How many posts do you want me to like?</h5></label>
                <input type="text" 
                className="form-control" 
                id="usernameInput" 
                placeholder="Ex: 10" 
                onChange={event => {
                  setAmountOfLikes(event.target.value)
                }}
                input/>
              </div>

              <div className="form-check">
                <input type="checkbox" 
                className="form-check-input" 
                id="follow-user" 
                onChange={event => {
                  setFollow(event.target.value)
                }}
                input/>

                <label className="form-check-label" htmlFor="follow-user">follow me too!</label>
              </div>

              <div className="mt-3 col-md-12">
                <button 
                  className="w-100 btn btn-lg btn-primary mr-1"
                  onClick={getLikes()}
                  type="submit">Get likes!
                </button>
              </div>
            </form>
        </React.Fragment> 
    );
}

export default HomePage;