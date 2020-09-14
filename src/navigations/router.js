/* Root App router
 *
 * author: Jeff Hsu
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LoginPage from '_features/login-page';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpForm from '_features/signup-form';
import LandingPage from '_features/landing-page';

const Stack = createStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"landingPage"}>
        <Stack.Screen
            name="landingPage"
            component={LandingPage}
            options={{title: 'Landing Page'}}
          />
          <Stack.Screen
            name="loginPage"
            component={LoginPage}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="signUpForm"
            component={SignUpForm}
            options={{title: 'Sign Up'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
