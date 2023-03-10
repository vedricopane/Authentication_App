import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      <SignUpScreen />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})