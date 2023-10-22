import { Text, View, StyleSheet } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
  <View>
      <View style={styles.memoListItem}>
       <View>
        <Text style={styles.memoListItemTitle}>Title</Text>
        <Text style={styles.memoListItemDate}>yyyy/mm/dd 24hh:MM:ss</Text>
       </View>
       <View>
        <Text>X</Text>
       </View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', // 構造を反転
    justifyContent: 'space-between', // 反転により横方向の制御
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center', // 反転により縦方向の制御
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
