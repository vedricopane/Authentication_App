import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SosialMediaSignInButton from '../../components/SosialMediaSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&`*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();

  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn('Register');
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUSePressed = () => {
    console.warn('Terms Of Use');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy Policy');
  };

  const onSignInPressed = () => {
    console.warn('Sign In');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be at least 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
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
        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{validate: value => value === pwd || 'Password do not match'}}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUSePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SosialMediaSignInButton />

        <CustomButton
          text="Have an account ? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
