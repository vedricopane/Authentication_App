import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSendPressed = (data) => {
    console.warn(data)
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        name="username"
        placeholder="Enter your username"
        control={control}
        rules={{required: 'Username is required'}}
      />

      <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

      <CustomButton
        text="Back to Sign In"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
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
  },
});
