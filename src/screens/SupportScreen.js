import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_Feather from 'react-native-vector-icons/Feather'
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'





const SupportScreen = () => {
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
}}>Support</Text>
<View style={styles.textRegion}>
  <Text style={styles.HeadT}>
    Answers and Feedback</Text>
  <View style={styles.line} />
  

  <View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30}}>
  <Text style={styles.MainT}>Find help</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Feather name='external-link' color='black' size={25} fontWeight='bold' />
    </View>
    </View>  
  <View style={styles.line} />
  <View style={styles.setUpwork}>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.MainT}>Rate the App</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
    </View>  
  <View style={styles.line} />

</View>

<View style={styles.separator}>
</View>

<View style={styles.textRegion}>
  <Text style={styles.HeadT}>
    Terms and policies</Text>
<View style={styles.line} />
<View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30}}>
  <Text style={styles.MainT}>Privacy Policy</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Feather name='external-link' color='black' size={25} />
    </View>
    </View>  

  <View style={styles.line} />
  
    
  <View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30}}>
  <Text style={styles.MainT}>Terms of Service</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Feather name='external-link' color='black' size={25} />
    </View>
    </View>  
  
  <View style={styles.line} />




  <View style={styles.setUpwork}>
  <View>
  <Text style={styles.MainT}>Third-party licenses</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
    </View> 




    <View style={styles.line} />

</View>
</View>
   </SafeAreaView>
  )
  }


export default SupportScreen

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
      marginTop: 10,
    },
    heading_Bolt: {
      fontSize: 16,
      color:'green'
    },
    line: {
      backgroundColor: 'black',
      height: 1,
      width: '100%',
      marginVertical: 5,
    },

      paymentMethodName: {
        marginLeft: 10,
        fontSize: 16,
      },
      iconContainer: {
        width: 40,
        //alignItems: 'flex-end',
      },
     
      setUpwork:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        gap:10
       // gap:5
       
      },
      HeadT:{
        fontSize:19,
        fontWeight:'bold'
      },

      MainT:{
        fontSize: 16,
        fontWeight:'500'
        
      },
    
     
    

    
  });
