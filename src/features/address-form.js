/* User Sign Up Form
 *
 * author: Jeff Hsu
 */

import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

function AddressForm() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [state, setState] = useState('state');

  const onPressStateButton = () => {
    console.log('hello');
  };

  return (
    <View>
      <TextInput
        label="Address"
        value={address}
        onChangeText={(value) => setAddress(value)}
      />
      <TextInput
        label="City"
        value={city}
        onChangeText={(value) => setCity(value)}
      />
      <Button
        onPress={onPressStateButton}
        title={state}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput
        label="Zip Code"
        value={zipcode}
        onChangeText={(value) => setZipCode(value)}
      />
    </View>
  );
}

export default AddressForm;
