import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './A.scss'

export default class A extends Component {

  componentWillMount () {
    // console.log(this.props)
  }

  componentDidMount () {
    // console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='a'>
        <Text>a component {this.props.t}</Text>
      </View>
    )
  }
}

