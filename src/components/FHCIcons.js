import { StyleSheet,Text, View } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Fontisto} from '@expo/vector-icons'

const FHCIcons = () => {
  return (
    <View>

      <View style = {styles.division}>      
      <FontAwesome5
         name= 'car-side' size= {53} 
         style = {styles.icons}
        
       />
    <MaterialCommunityIcons
         name= 'bed-king' size= {65} 
         style = {styles.icons}
       />
       <FontAwesome5
         name= 'plane' size= {55} 
         style = {styles.icons}
         />
       
       
      </View>
      <View style = {styles.txt} >
      <Text style={{fontSize:15, right: 19, fontWeight:'bold'}}>Car Rentals </Text>
      <Text style={{fontSize:15, right: 42,fontWeight:'bold'}}>Hostels</Text>
      <Text style={{fontSize:15, right: 39,fontWeight:'bold'}}>Flights</Text>
      </View>
    </View>
  )
}

export default FHCIcons

const styles = StyleSheet.create({
  icons: {
    borderWidth: 2,
    height: 80,
    width: 80,
    paddingTop: 10,
    paddingLeft: 8,
    marginLeft:5,
    borderRadius:40,
    marginHorizontal: 50,
    backgroundColor: 'blue',
    color:'white',
    alignItems: 'center'
  },

  division:{
    flexDirection: 'row',
    paddingHorizontal: 26,
    bottom: 45,
    alignItems: 'center'
  },
  txt:{
    flexDirection: 'row',
    alignContent:'center',
    marginLeft:24,
    paddingHorizontal: 30,
    bottom: 40,
    justifyContent:'space-between',
    paddingRight: 8
    
  }
 
})