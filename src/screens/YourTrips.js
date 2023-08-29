import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_Feather from 'react-native-vector-icons/Feather'
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'





const YourTrips = () => {
  return (
   <SafeAreaView style={styles.container}>
<View styles={styles.mainItems}>
<TouchableOpacity onPress={() =>navigation.navigate('HomeScreen')}>
  <Icon name="arrowleft"  color='black'size={27}/>
</TouchableOpacity>
<Text style={{
  fontSize:24,
  fontWeight:'bold',
color:'black',
marginTop:5
}}>Your Trips</Text>
<View style={styles.textRegion}>

<View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30,}}>
  <Text style={styles.HeadT}>Trip planning</Text>
  </View>
    </View>  
  
  <View style={styles.line} />
  

   <View style={styles.setUpwork}>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.MainT}>Bookings</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
    </View>  
  
  <View style={styles.line} />

  <View style={styles.setUpwork}>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.MainT}>Price Alerts</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Feather name='external-link' color='black' size={25} />
    </View>
    </View>  

  <View style={styles.line} />

</View>



<View style={styles.separator}>
  
</View>

</View>
   </SafeAreaView>
  )
}

export default YourTrips

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1,
    paddingLeft:13,
    paddingRight:13
  },
  textRegion:{
  gap:5,
  marginTop:18,
  borderRadius:5,
  height:150
  },
    separator: {
      marginTop: 50,
    },
    heading_Bolt: {
      fontSize: 16,
      color:'green'
    },
    line: {
      backgroundColor: 'grey',
      height: 1,
      width: '100%',
      marginVertical: 5,
    },
    subheading: {
      fontSize: 16,
      color:'green'
    },

      paymentMethodName: {
        marginLeft: 10,
        fontSize: 16,
      },
      iconContainer: {
        width: 40,
        alignItems: 'flex-end',
      },
     
      setUpwork:{
        flexDirection:'row',
        justifyContent: 'space-between',
       
      },
      HeadT:{
        fontSize:19,
        fontWeight:'bold'
      },

      MainT:{
        fontSize: 16,
        fontWeight:'500'
        
      },
      iconContainersetup:{
        alignItems:'flex-end',
      }
     
    

    
  });

  