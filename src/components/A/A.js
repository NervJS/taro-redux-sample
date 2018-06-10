import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './A.scss'

export default class A extends Component {
  render () {
    return (
      <View className='a'>
        <Text>a component</Text>
      </View>
    )
  }
}

