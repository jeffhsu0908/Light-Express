/* Initial landing page when the user first runs the app or is not signed in
 *
 * author: Jeff Hsu
 */

import React from 'react';
import {View} from 'react-native';
import {Title, Button} from 'react-native-paper';

function LandingPage({navigation}) {
  return (
    <View>
        <Title>Light Express</Title>
        <Button onPress={() => navigation.push('loginPage')}>Login</Button>
        <Button onPress={() => navigation.push('signUpForm')}>Sign Up</Button>
    </View>
  );
}

export default LandingPage;
