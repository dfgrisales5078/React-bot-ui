import React from 'react';

const HomePage = () => {
    return (
        <React.Fragment>
            <h1>Enter your Instagram:</h1>
            <form>
              <div className="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="@example" input/>
                <label for="floatingInput">username</label>
              </div>
              <div class="mt-3 col-md-12">
                <button class="w-100 btn btn-lg btn-primary mr-1" type="submit">Get likes!</button>
              </div>
            </form>
        </React.Fragment>
    );
}


export default HomePage;