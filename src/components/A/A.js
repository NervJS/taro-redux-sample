import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './A.scss'

export default class A extends Component {

  componentWillMount () {
    // console.log(this.$router.params)
  }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClickHandler () {
    this.props.onClick()
  }

  render () {
    return (
      <View className='a'>
        <Button onClick={this.onClickHandler.bind(this)}>点我</Button>
        <Text>a component {this.props.t}</Text>
      </View>
    )
  }
}

