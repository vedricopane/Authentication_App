import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SosialMediaSignInButton from '../../components/SosialMediaSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          //rules adalah validation rules untuk menghandle eror pada form yg dibantu pada rules di CustomInput.js
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{required: 'Password is required', minLength: {value: 3, message: 'Password should be minimum 3 characters long'}}}
        />

        {/* <TextInput placeholder="password" placeholderTextColor="gray" /> */}

        <CustomButton text="Login" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot Password ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SosialMediaSignInButton />

        <CustomButton
          text="Don't have an account ? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
