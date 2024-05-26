import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: "yellow", 
      alignItems: "center",
      justifyContent: "center"}}>
      <Text style={{ fontSize: 24}}>My name is <Text style={{fontWeight: "bold"}}>Sophia Nhyira Yawson</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}


