
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({
  Auth: {
      userPoolId: 'us-east-1_RRkXdEPfh',
      authenticationFlowType: 'USER_SRP_AUTH' | 'USER_PASSWORD_AUTH',
      userPoolWebClientId: '7mgek3f6gv1id1bc4mcgghs69'
  }
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>CognitoApp</Text>
      </View>
    );
  }
}


export default withAuthenticator(App, {
  includeGreetings: true,
  federated: {
    google_client_id: '807330092930-lrvggss4545a0l2ebsif9r5fm06138as.apps.googleusercontent.com',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
