import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native'
import React from 'react'



const UseHeader = () => {
  return (
      <SafeAreaView style = {styles.safe}>
       <Image 
       source={require('../assets/logo.png')} 
       resizeMode={("contain")}
       style={styles.logo}
       />    
       </SafeAreaView> 
  )
}

export default UseHeader

const styles = StyleSheet.create({
  logo: {
    width: 261, 
    height: 174,
    bottom: 2    
  },
        
});
              
        


