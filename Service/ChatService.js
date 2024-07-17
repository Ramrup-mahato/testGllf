import { useEffect, useState } from "react";
import { Storage } from "expo-storage";
import * as SecureStore from "expo-secure-store";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";

const ChatService = () => {
  const [isAuth, setIsAuth] = useState();
  const [chat, setChat] = useState({
    room: null,
    allRoom: null,
    exit: false,
    option: false,
    optionText: "",
  });

  const saveToken = async (token) => {
    try {
      await SecureStore.setItemAsync("userToken", token);
      console.log("Token saved successfully");
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");
      if (token !== null) {
        console.log("Retrieved token:", token);
        return token;
      } else {
        console.log("Token not found in secure storage");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };

  // Usage example
  getToken().then((token) => {
    // Use the retrieved token as needed
    console.log("Token received:", token);
    // setIsAuth(token);
  });

  alert(getToken);
  const handleSignWithGoogle = async () => {
    try {
      let result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {}, []);
  return { isAuth, chat, handleSignWithGoogle };
};

export default ChatService;
