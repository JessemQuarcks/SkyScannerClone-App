import { StyleSheet, Text,Image, View, ImageBackground } from 'react-native'
import React from 'react'

const Explore = (props) => {
  return (
    <View style={styles.abs}>
    <View style ={styles.container}>
    <Image
       source={props.imgSrc} 
       style={styles.fpic}
       />    
    </View>
    <View style = {styles.ovtxt}>
      <Text style = {styles.txt}> {props.exploretxt} </Text>
      <Text style = {styles.txt1}>{props.exploretxt1} </Text>
    </View>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  fpic:{

    width: 360,
    height: 420,
   resizeMode:'cover',
   alignContent:'center',
   borderWidth: 3,
   borderRadius:10
  },

  container:{
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    padding: 26,
    top:-20
  },
  ovtxt:{
    right: 0,
    bottom:-80,
  },
  txt1:{
    color:'white',
    fontSize: 25,
    textAlign:'center'
  },
  txt:{
    color:'white',
    fontSize: 15,
    textAlign:'center'
  },
  abs:{
    paddingVertical: 200
  }

})