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

const Stack = createStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Login Page"
            component={LoginPage}
            options={{title: 'Login Page'}}
          /> */}
          <Stack.Screen
            name="Sign Up Page"
            component={SignUpForm}
            options={{title: 'Sign Up Page'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
