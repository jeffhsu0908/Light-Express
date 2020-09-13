/* User Sign Up Form
 *
 * author: Jeff Hsu
 */

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressLoginButton = () => {
    // TODO: implement user press login functionality
  };

  const onPressSignUpButton = () => {
    // TODO: redirect user to sign up form
  }
  return (
    <View>
      <TextInput
        label="Username"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        label="Password"
        onChangeText={(value) => setPassword(value)}
      />
      <Button mode="contained" onPress={onPressLoginButton}>
        Login
      </Button>
      <Button mode="contained" onPress={onPressSignUpButton}>Sign Up</Button>
    </View>
  );
}

export default LoginPage;
