import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './B.scss'

export default class B extends Component {
  render () {
    return (
      <View className='b'>
        <Text>b component</Text>
      </View>
    )
  }
}

