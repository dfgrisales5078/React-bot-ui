import React from 'react';
import { useState } from 'react';



const HomePage = () => {
    const [username, setUsername] = useState("user")
    const [amountOfLikes, setAmountOfLikes] = useState(0)
    const [follow, setFollow] = useState('off')
    const [isPending, setIsPending] = useState(false)

    // TODO fix post fucntion call
    const getLikes = async () => {
      try {
        setIsPending(true)
        await fetch('http://127.0.0.1:5000/getlikes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },     
          body: JSON.stringify(
            {
              username: username,
              posts: amountOfLikes,
              follow: follow
            })
        }).then(async (response) => {
          const data = await response.json();
          console.log(data);
          setIsPending(false)
        })
          
      } catch (error) {
        throw error;
      }
    }

    // const getLikes = () => {
    //     setIsPending(true)
    //     fetch('http://127.0.0.1:5000/getlikes', {
    //       headers: { 'Content-Type': 'application/json' },
    //       method: 'POST',     
    //       body: JSON.stringify(
    //         {
    //           username,
    //           amountOfLikes,
    //           follow
    //         }
    //       )
    //     }).then( (response) => {
    //       response = response.status
    //       console.log(response)
    //       setIsPending(false)
    //     }
    //     )
    //   } 

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
                {!isPending && <button 
                  className="w-100 btn btn-lg btn-primary mr-1"
                  onClick={() => getLikes()}  
                  type="submit">Get likes!
                </button>}
                {isPending && <button disabled
                  className="w-100 btn btn-lg btn-primary mr-1"
                  onClick={getLikes}  
                  type="submit">Getting Likes!
                </button>}
              </div>
            </form>
        </React.Fragment> 
    );
}

export default HomePage;