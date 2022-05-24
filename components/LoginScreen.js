import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginAction , setRoleAction , setIdAction } from "../actions/authActions";

export default function Login({ navigation }) {
  const [data , setData] = useState({
    email : "",
    password : ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e });
  };
  const dispatch = useDispatch();

  const login =(data)=> {
   return axios.post(`http://172.16.10.38:5000/api/login`, data);
 }
 const handlePassword = (e) => {
  setData({ ...data,password: e });
};

const handleSubmit =()=> {
  login(data).then((response) => {
    console.log(response);
    (async () => {
      console.log(response.data.token)
      await dispatch(loginAction());
      await dispatch(setRoleAction(jwtDecode(response.data.token).role));
      await dispatch(setIdAction(jwtDecode(response.data.token)._id));
    })()
    navigation.navigate('Home')
  }).catch((err) => console.log('err',err.response));
  setSubmitted(true);
};
  return (

<View style={styles.container}>
 <Image style={styles.image} source={require ('../assets/logo-removebg-preview.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          email={data.email}
          onChangeText={handleEmail}
          
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          password={data.password}
          onChangeText={handlePassword}
          
          
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
    </View>
);
}
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