import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import Settings from './src/screens/SettingScreen'
import YourDetails from './src/screens/YourDetails'
import SupportScreen from './src/screens/SupportScreen'
import { NavigationContainer } from '@react-navigation/native'
import YourTrips from './src/screens/YourTrips'
import SettingScreen from './src/screens/SettingScreen'







const App = () => {
  return (
    <NavigationContainer>
    {/* Rest of your app code */}
    <SafeAreaView style= {styles.container}>
    <YourDetails/> 
    </SafeAreaView>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 10,
    backgroundColor: 'white',
    flex: 1
  }
})