import React, {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import axios from 'axios'


export default function Register({ navigation }) {

  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")
 

  const handleName = (e)=>{
    return setName(e)
  }
 
  const handleEmail = (e)=>{
    return setEmail(e)
  }
  const handlePassword = (e)=>{
    return setPassword(e)
  }
  
  const API_URL = 'http://172.16.10.38:5000/api/register';
  const regesterHandler = async ()=>{
    const 
    _user={
     name,
      email,
      password,

    }
   try {
     const result = await axios.post(API_URL , _user)
     console.log(result)
     navigation.navigate('Login')
   } catch (error) {
     console.log(error)
   }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require ('../assets/logo-removebg-preview.png')} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Name"
          placeholderTextColor="#003f5c"
          onChangeText={handleName}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          onChangeText={handleEmail}
          
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={handlePassword}
         
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={regesterHandler}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width:"50%",
    height:"20%",
    borderRadius: 50
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'white'
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF8000",
  },
  forgot_button:{
    color:'#ff8000'
  }
});