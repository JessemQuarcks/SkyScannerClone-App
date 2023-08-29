import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UseHeader from '../components/UseHeader'
import FHCIcons from '../components/FHCIcons'
import Explore from '../components/Explore'
import { ScrollView } from 'react-native'

const HomeScreen = () => {
  return (
    <View style= {styles.home}>
      <ScrollView>
      <UseHeader/>
    <FHCIcons/>
    <Explore imgSrc={require('../assets/firstPic.jpg')} exploretxt1={'Explore Everywhere'} exploretxt={'Can’t decide where to go?'}/>
    <Explore imgSrc={require('../assets/Secpic.jpeg')}exploretxt1={'Best Rental Car Deal'}/>
   
      </ScrollView>
    
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})