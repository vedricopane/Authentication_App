import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm()

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data)
    navigation.navigate('Home');
  };

  const onResendPressed = () => {
    console.warn('Resend');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput
      name='code'
        placeholder="Enter your confirmation code"
        control={control}
        rules={{ required: 'Confirmation code is required' }}
      />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

      <CustomButton
        text="Resend Code"
        onPress={onResendPressed}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign In"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default ConfirmEmailScreen;

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
