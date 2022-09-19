import React from 'react';

const HomePage = () => {
    return (
        <React.Fragment>
        <h1>Enter your Instagram username:</h1>
            <form>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="@example" input/>
                <label for="floatingInput">username</label>
              </div>
    
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </React.Fragment>
    );
}


export default HomePage;