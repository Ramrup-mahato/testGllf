import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";

const ScannerService = () => {
  const [scanned, setScanned] = useState(false);
  const [permission, setPermission] = useState(null);

  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);
    alert(`QR Code scanned: ${data}`);
  };

  useEffect(() => {
    const bar = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === "granted");
    };

    bar();
  }, []);
  return {
    scanned,
    permission,
    setScanned,
    handleQRCodeScan,
  };
};

export default ScannerService;
