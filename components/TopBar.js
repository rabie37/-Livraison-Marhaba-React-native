import React from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import { Feather,SimpleLineIcons } from "@expo/vector-icons"

class TopBar extends React.Component {
  render() {
    return (  
      <View style={styles.container}>
        <Feather name="menu" size={24} color="black" />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>ᗰᗩᖇᕼᗩᗷᗩ</Text>
        
        <SimpleLineIcons name="basket" size={24} color="black" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'transparent',
    alignItems: 'top',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  
});

export default TopBar;