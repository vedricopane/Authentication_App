import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
    </View>
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
