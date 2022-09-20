import React from 'react';

const HomePage = () => {
    return (
        <React.Fragment>
            <h1>Enter your Instagram:</h1>
            <form>
              <div class="form-group">
                <label for="usernameInput"><h5>Username:</h5></label>
                <input type="text" class="form-control" id="usernameInput" placeholder="@IG_username" input/>
              </div>

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="follow-user" input/>
                <label class="form-check-label" for="follow-user">follow me too!</label>
              </div>

              <div class="mt-3 col-md-12">
                <button class="w-100 btn btn-lg btn-primary mr-1" type="submit">Get likes!</button>
              </div>
            </form>
        </React.Fragment> 
    );
}


export default HomePage;