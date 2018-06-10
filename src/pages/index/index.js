import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }

  async handleX () {
    await console.log('sdsd')
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.handleX}>122</Text>
      </View>
    )
  }
}

