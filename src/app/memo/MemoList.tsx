import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const MemoList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MemoList
