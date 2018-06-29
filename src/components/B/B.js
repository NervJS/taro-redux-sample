import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './B.scss'

export default class B extends Component {
  onClickHandler = () => {
    this.props.onClick()
  }

  render () {
    return (
      <View className='b' onClick={this.onClickHandler.bind(this)}>
        <Text>b component</Text>
      </View>
    )
  }
}

