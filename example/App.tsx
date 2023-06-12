import { StyleSheet, Text, View } from 'react-native';

import * as ExpoPay from 'expo-pay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoPay.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
