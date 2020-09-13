/* Login Page
 *
 * author: Jeff Hsu
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <TextInput label="Username" />
        <TextInput label="Password" />
        <Button icon="camera" mode="contained">Login</Button>
        <Button icon="camera" mode="contained">Sign Up</Button>
      </View>
    );
  }
}
