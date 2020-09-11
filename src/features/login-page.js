/* Login Page
 *
 * author: Jeff Hsu
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextBox from '_components/textbox';
import TextButton from '_components/text-button';

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <TextBox placeholder="Username" />
        <TextBox placeholder="Password" />
        <TextButton buttonText="Login" />
        <TextButton buttonText="Sign Up" />
      </View>
    );
  }
}
