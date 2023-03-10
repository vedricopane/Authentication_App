import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('Submit');
  };

  const onSignIn = () => {
    console.warn('Sign In');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput placeholder="Code" value={code} setValue={setCode} />
      <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
      />

      <CustomButton text="Submit" onPress={onSubmitPressed} />
      <CustomButton text="Back to Sign In" onPress={onSignIn} type="TERTIARY" />
    </View>
  );
};

export default NewPasswordScreen;

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
  },
});
