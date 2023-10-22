import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang={false}>World!! Take it easy.</Hello>
      <Hello bang={false} style={styles.container2}>World!! Take it easy.</Hello>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    fontSize: 30,
    backgroundColor: 'green'
  }
})

export default App
