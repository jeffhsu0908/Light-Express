/* Application Entry Point
 *
 * author: Jeff Hsu
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import myStore from './myStore';
import Router from './navigations/router';

export default class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Router />
      </Provider>
    );
  }
}
