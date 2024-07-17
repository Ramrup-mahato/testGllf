import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import ProductService from "../Service/ProductService";
import { EvilIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const { users, handleOnchange, info, handleDelete } = ProductService();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f9fd" />

      <View style={styles.SearchView}>
        <View style={styles.SearchMain}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            style={styles.TextInput}
            placeholder="Search"
            styles={{ width: "100%" }}
            onChangeText={handleOnchange}
          />
        </View>
      </View>
      {info.loader === true ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                  <View style={styles.deleteButton}>
                    <AntDesign name="delete" size={24} color="red" />
                  </View>
                </TouchableOpacity>
              )}
            >
              <View style={styles.MainView}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item?.image }}
                    width={50}
                    height={50}
                    style={styles.ImageofUser}
                  />
                  <View>
                    <Text style={{ fontWeight: "900", fontSize: 15 }}>
                      {item?.firstName +
                        " " +
                        item?.maidenName +
                        " " +
                        item?.lastName}
                    </Text>
                    <Text style={{ fontWeight: "400", fontSize: 12 }}>
                      {item?.email}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text> age:{item?.age}</Text>
                </View>
              </View>
            </Swipeable>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 40,
  },
  MainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#33333320",
    paddingVertical: 10,
  },
  ImageofUser: {
    borderRadius: 100,
    marginRight: 8,
  },
  SearchView: {
    height: 50,
    backgroundColor: "#005d5d",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 10,
  },
  SearchMain: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 100,
    height: 30,
    paddingHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: "#f7e5e4",
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
