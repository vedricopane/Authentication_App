import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('Send');
  };

  const onSignInPressed = () => {
    console.warn('Sign In')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        placeholder="Enter your username"
        value={username}
        setValue={setUsername}
      />

      <CustomButton text="Send" onPress={onSendPressed} />

      <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY" />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  }
});
