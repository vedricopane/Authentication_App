import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SosialMediaSignInButton from '../../components/SosialMediaSignInButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Login" onPress={onSignInPressed} />

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
