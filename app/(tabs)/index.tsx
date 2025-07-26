import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtxPgjYeGx7AEB48EaWzJPwG0EtgjcyM",
  authDomain: "sc-idp.firebaseapp.com",
  projectId: "sc-idp",
  storageBucket: "sc-idp.firebasestorage.app",
  messagingSenderId: "493792617214",
  appId: "1:493792617214:web:c38a062153049a11807baf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Player!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
