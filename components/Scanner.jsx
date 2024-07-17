import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import ScannerService from "../Service/ScannerService";

const Scanner = () => {
  const { scanned, permission,setScanned, handleQRCodeScan } = ScannerService();
  if (permission === null) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text>Requesting for Camera Permission</Text>
      </View>
    );
  }
  if (permission === false) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text>No Access to the Camera</Text>
      </View>
    );
    return;
  }

  return (
    <View style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <Button title="Tap to Scan Again"  onPress={() => setScanned(false)} color={"#005d5d"}  />
      )}
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Scanner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  infoContainer: {},
  infoText: {},
  resetText: {},
});
