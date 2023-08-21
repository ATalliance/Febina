import React from 'react';
import './userlogin.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      redirectToLanding: false,
      rememberMe: true,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Conditionally add the "remember" field only if the checkbox is checked
    if (this.state.rememberMe) {
      formData.append('remember', '');
    }

    try {
      const response = await fetch('/logim', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        this.setState({ redirectToLanding: true });
      } else {
        console.error(data.error);
        // Display error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle other errors
    }
  };

  render() {
    const { redirectToLanding, rememberMe } = this.state;

    if (redirectToLanding) {
      window.location.href = '/landingpage.js';
      return null;
    }

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="imgcontainer">
            <img
              src="images/img_avatar2.png"
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              required
            />
            <br />

            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />

            <button type="submit" className="cancelbtn">
              Login
            </button>
            <button
              type="button"
              onClick={() => this.setState({ modalVisible: false })}
              className="cancelbtn"
            >
              Cancel
            </button>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  this.setState({ rememberMe: event.target.checked })
                }
                name="remember"
              />{' '}
              Remember me
            </label>

            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
