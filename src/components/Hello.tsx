import { StyleSheet, Text, View, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean // 設定を必須としない
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  // const children = props.children //分割代入
  const { children, bang, style } = props
  return ( // 3項演算子 bangの値が存在しない場合の考慮を入れる
        <View>
            <Text style={[styles.text, style]}>{children}
            {bang === true ? '!' : ''}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
