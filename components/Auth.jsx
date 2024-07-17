import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const Auth = ({handleSignWithGoogle}) => {
  return (
    <View style={styles.googleButton}>
      <TouchableOpacity style={styles.Button} >
        <Text style={{color:'#fff'}}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  googleButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Button:{
    backgroundColor:'#005d5d',
    color:'#fff',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:50
  }
});
