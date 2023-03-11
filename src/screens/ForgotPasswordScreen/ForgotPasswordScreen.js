import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation()

  const onSendPressed = () => {
    navigation.navigate('NewPassword')
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
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
