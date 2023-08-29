import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const TripsScreen = () => {
  return (
    <View>
        <Image source ={require('../assets/trip.png')}
                style={{resizeMode:'contain', height: 440, width: 330, borderWidth:2}} > </Image>
    </View>
  )
}

export default TripsScreen

const styles = StyleSheet.create({})