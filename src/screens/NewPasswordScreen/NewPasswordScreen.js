import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        name="code"
        placeholder="Code"
        control={control}
        rules={{required: 'Code is required'}}
      />
      <CustomInput
        name="password"
        placeholder="Enter your new password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters long',
          },
        }}
      />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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
