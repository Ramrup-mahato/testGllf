import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import ChatService from '../Service/ChatService'
import Auth from './Auth'

const Chat = () => {
  const {isAuth,chat,handleSignWithGoogle}=ChatService()
  if(!isAuth){
    return(
      <Auth handleSignWithGoogle={handleSignWithGoogle} />
    )
  }
  return (
    <View style={styles.container}>
    <Text>Open up Chat</Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });