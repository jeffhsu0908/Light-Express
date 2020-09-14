/* User Sign Up Form
 *
 * author: Jeff Hsu
 */

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';
import AddressForm from './address-form';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [date, setDate] = useState('');

  return (
    <View>
      <TextInput
        label="First Name"
        onChangeText={(value) => setFirstName(value)}
      />
      <TextInput
        label="Last Name"
        onChangeText={(value) => setLastName(value)}
      />
      <TextInput
        label="Username"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        label="Password"
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
      label="Date Of Birth"
        render={props => (
          <TextInputMask
          {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={date}
            onChangeText={(value) => setDate(value)}
          />
        )}
      />
      <AddressForm />
      <Button mode="contained">Sign Up</Button>
    </View>
  );
}

export default SignUpForm;
