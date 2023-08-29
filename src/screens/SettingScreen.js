import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'






const SettingScreen = () => {
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
}}>Settings</Text>
<View style={styles.textRegion}>
  <Text style={styles.HeadT}>
    Regional</Text>
  <View style={styles.line} />
 <View style = {styles.horiz}>
<View Style ={styles.currency}>
  <Text style={styles.MainT}>Currency</Text>
  <Text style={styles.SubT}>Ghanaian Cedi</Text>
</View>
<View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right'color='black' size={25} />
      </View>
  </View> 
  <View style={styles.line} />
  <View style = {styles.horiz}>
<View Style ={styles.currency}>
  <Text style={styles.MainT}>Country or region</Text>
  <Text style={styles.SubT}>Ghana</Text>
</View>
<View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right'color='black' size={25} />
      </View>
  </View> 
  <View style={styles.line} />

</View>



<View style={styles.separator}>
 
</View>

<View style={styles.textRegion}>
  <Text style={styles.HeadT}>
    Others</Text>
<View style={styles.line} />


{/**  the marketting  */}
<View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30}}>
  <Text style={styles.MainT}>Marketing options</Text>
  </View>
    <View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
    </View>
    </View>

  <View style={styles.line} />
  <View style={styles.paymentMethodItem}>
    
  <View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:-30}}>
  <Text style={styles.MainT}>Data Settings</Text>
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

export default SettingScreen

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1,
    paddingLeft:16,
    paddingRight:16
  },
  textRegion:{
  gap:4,
  marginTop:18,
  },
    separator: {
      marginTop: 50,
    },
    heading_Bolt: {
      fontSize: 16,
      color:'green'
    },
    line: {
      backgroundColor: '#f1f1f1',
      height: 1,
      width: '100%',
      marginVertical: 5,
    },
    subheading: {
      fontSize: 16,
      color:'green'
    },

      paymentMethodName: {
        marginLeft: 30,
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
      
      },
      horiz:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      
        
      
     
    

    
  });
