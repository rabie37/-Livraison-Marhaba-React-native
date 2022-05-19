import React from 'react';
import {  StyleSheet, Text, View,  Dimensions,Image, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const width = Dimensions.get('window').width


export default function OnBoardScreen({navigation}) {

return (
  <View style={styles.container}>

    <Image source={require ("../assets/deleveryImage.png")} resizeMode="contain" style={styles.image}>
    </Image>
    <StatusBar style="auto" />
    <View style={styles.indicatorContainer}>
        <View style={styles.currentIndicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
   
      <Pressable onPress={()=> navigation.navigate('Register')}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> 𝐆𝐄𝐓 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 </Text>
        </View>
    </Pressable>
  </View>
);
  }

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ffcc2a',
  alignItems: 'center',
  justifyContent: 'center',
},
image: {
  width: '80%',
  height: '40%',
  flex: 1,
  justifyContent: "flex-start",
},
indicatorContainer: {
  height: 50,
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
},
currentIndicator: {
  height: 12,
  width: 30,
  borderRadius: 10,
  backgroundColor: '#F9813A',
  marginHorizontal: 5,
},
indicator: {
  height: 12,
  width: 12,
  borderRadius: 6,
  backgroundColor: '#908e8c',
  marginHorizontal: 5,
},
btnContainerStyle: {
  backgroundColor: '#e63f24',
  paddingVertical: 20,
  width: width / 1.3,
  borderRadius: 30,
  marginBottom: 100
},
btnTextStyle: {
  color: '#fff',
  fontSize: 16,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Quicksand-Medium'
},
});