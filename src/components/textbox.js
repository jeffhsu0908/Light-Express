import React from 'react';
import { TextInput } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

const TextBox = props => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      placeholder={props.placeholder}
    />
  );
}

export default TextBox;