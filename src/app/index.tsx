import { Text, View, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.headerTitle}>Memo App</Text>
            <Text style={styles.headerRight}>ログアウト</Text>
          </View>
       </View>

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

       <View style={styles.circleButton}>
       <Text style={styles.circleButtonLabel}>+</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center', // 縦方向
    // alingItem: 'center' // 横方向
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
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
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // ios
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // andoroid
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index
