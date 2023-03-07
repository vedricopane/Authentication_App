import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignInScreen from './src/screens/SignInScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Text>Heloo there ....</Text> */}
      <SignInScreen />
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