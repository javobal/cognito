import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'; 
import './App.css';
import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
      userPoolId: 'us-east-1_RRkXdEPfh',
      userPoolWebClientId: '7sea7r0emjtmjughhir7mbas61',
      authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      response: {},
    }
    this.apiTest = this.apiTest.bind(this);
  }

  apiTest() {
    fetch('http://localhost:3001/secure', {
      method: 'GET',
      headers:{
        'Authorization': `Bearer ${this.props.authData.signInUserSession.accessToken.jwtToken}` 
      }
    }).then(res => {
      return res.json();
    })
    .catch(error => {
      console.log(error);
    })
    .then(response => {
      console.log(response);
      this.setState({ response: response });
    })
    
  }

  render() {
    return (
      <div className="App">
          <p>{this.props.authData.signInUserSession.accessToken.jwtToken}</p>
          <button onClick={this.apiTest} >Test Api</button>
          <p> Response Message: {this.state.response.message}</p>
      </div>
    );
  }
}

export default withAuthenticator(App);
